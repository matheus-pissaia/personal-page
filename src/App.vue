<template>
    <div
        class="h-screen overflow-hidden bg-green-900 text-white text-20 font-Terminal leading-normal [ old-monitor-effect ]"
    >
        <div class="max-w-screen-lg max-h-full py-4 mx-auto">
            <div
                class="flex items-center justify-between mb-10 px-4 bg-green-500
                text-28 text-green-900 leading-none"
            >
                <span>PERSONAL TERMINAL</span>
                <time id="time">{{ currentTime }}</time>
            </div>

            <div class="relative max-h-full grid grid-cols-[auto_1fr] gap-16">
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

                <div class="flex flex-col">
                    <!--
                        Force re-render every time the selected folder changes
                        to update `fileButtons` ref
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

                    <div class="h-6 bg-green-500" />

                    <main
                        v-if="selectedFile"
                        class="overflow-y-auto flex-auto max-h-auto p-4 border-2 border-green-500 text-28 leading-tight"
                    >
                        <img
                            src="https://avatars.githubusercontent.com/u/69802406?v=4"
                            alt="Foto de perfil"
                            class="size-64"
                        >

                        <p>Nome: Matheus Pissaia</p>
                        <p>Curso: Sistemas da Informação | UFSC</p>
                        <p>Linguagens e tecnologias: TODO</p>

                        <a
                            href="https://github.com/matheus-pissaia"
                            title="GitHub"
                            target="_blank"
                            rel="noopener"
                            class="flex items-center gap-2 leading-none"
                        >
                            <GitHub />
                            <span>GitHub</span>
                        </a>
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, nextTick, ref, shallowRef, useTemplateRef } from 'vue'
    import FileButton from './components/FileButton.vue'
    import FolderButton from './components/FolderButton.vue'
    import GitHub from './components/GitHub.vue'
    import { useTime } from './composables/time'
    import FolderLine from './components/FolderLine.vue'
    import { folders, type Folder, filesByFolder } from './assets/constants'

    const { currentTime } = useTime()
    const fileButtons = useTemplateRef('fileButtons')

    const selectedFile = ref<string | null>(null)
    const selectedFolder = ref<Folder>(folders.ABOUT)
    const folderElement = shallowRef<HTMLElement | null>(null)
    const firstFileButton = ref<HTMLElement | null>(null)

    const availableFolderFiles = computed(() => selectedFolder.value && filesByFolder[selectedFolder.value])

    async function handleSelectFolder(folder: Folder, event: MouseEvent) {
        if (folder === selectedFolder.value)
            return

        selectedFile.value = null
        selectedFolder.value = folder

        nextTick(() => {
            // Update both refs on next tick so we dont retrigger the
            // `FolderLine` component twice
            folderElement.value = event.target as HTMLElement
            firstFileButton.value = fileButtons.value?.[0]?.$el
        })
    }
</script>
