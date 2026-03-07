<template>
    <div class="w-full max-w-screen-lg h-full grid grid-rows-[auto_1fr] gap-10 py-4 mx-auto">
        <TopBar />

        <div class="relative h-full grid grid-cols-[auto_1fr] gap-16">
            <FolderLine :from-element="folderElement" :to-element="firstFileButton" />

            <nav>
                <p class="text-green-500 text-28">
                    FOLDERS
                </p>
                <ul class="grid grid-cols-1 gap-2">
                    <li v-for="folder in folders" :key="folder">
                        <FolderButton
                            :selected="selectedFolder === folder"
                            @click="handleSelectFolder(folder, $event)"
                        >
                            {{ folder }}
                        </FolderButton>
                    </li>
                </ul>
            </nav>

            <div class="max-h-full flex flex-col">
                <!--
                    Pass key to force re-render every time the selected
                    folder changes to update `fileButtons` ref
                -->
                <div :key="selectedFolder || 0" class="space-y-2 mb-4">
                    <FileButton
                        v-for="file in availableFolderFiles"
                        ref="fileButtons"
                        :key="file"
                        :selected="selectedFile === file"
                        @click="selectedFile = file"
                    >
                        {{ file }}
                    </FileButton>
                </div>

                <div v-if="selectedFile" class="h-full relative border-2 border-t-[20px] border-green-500">
                    <main
                        class="absolute inset-0 overflow-y-auto
                            p-6 text-28 leading-tight text-bloom
                            [mask:linear-gradient(to_bottom,transparent,white_4%,white_96%,transparent)]"
                    >
                        <p v-if="!selectedFileComponent">
                            CONTENT UNAVAILABLE
                        </p>

                        <component :is="selectedFileComponent" v-else />
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, nextTick, ref, shallowRef, useTemplateRef } from 'vue'
    import FileButton from './FileButton.vue'
    import FolderButton from './FolderButton.vue'
    import TopBar from './TopBar.vue'
    import FolderLine from './FolderLine.vue'
    import { folders, type Folder, filesByFolder, fileComponentsByFolder } from './Tabs'

    const fileButtons = useTemplateRef('fileButtons')

    const selectedFile = ref<string | null>(null)
    const firstFileButton = ref<HTMLElement | null>(null)

    const selectedFolder = ref<Folder | null>(null)
    const folderElement = shallowRef<HTMLElement | null>(null)

    const availableFolderFiles = computed(() => selectedFolder.value && filesByFolder[selectedFolder.value])

    const selectedFileComponent = computed(() => {
        if (!selectedFolder.value || !selectedFile.value)
            return null

        return fileComponentsByFolder[selectedFolder.value][selectedFile.value]
    })

    async function handleSelectFolder(folder: Folder, event: MouseEvent) {
        if (folder === selectedFolder.value)
            return

        selectedFile.value = null
        selectedFolder.value = folder

        nextTick(() => {
            // Wait for DOM to update to then update both refs on next tick so
            // we dont trigger the `FolderLine` component twice
            folderElement.value = event.target as HTMLElement
            firstFileButton.value = fileButtons.value?.[0]?.$el
        })
    }
</script>
