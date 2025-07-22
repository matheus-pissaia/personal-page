<template>
    <div
        class="h-screen overflow-hidden bg-green-900 text-white text-20 font-MS-DOS leading-normal [ old-monitor-effect ]"
    >
        <div class="max-w-screen-lg h-full flex flex-col py-4 mx-auto">
            <div
                class="flex items-center justify-between mb-8 px-4 bg-green-500 text-green-900"
            >
                <span>PERSONAL TERMINAL</span>
                <time id="time">{{ currentTime }}</time>
            </div>

            <div class="relative h-full flex items-end gap-16">
                <svg
                    id="svgEl"
                    width="100%"
                    height="100%"
                    class="absolute pointer-events-none -z-10"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path class="stroke-white stroke-2 fill-none" />
                </svg>

                <nav>
                    <h1 class="text-green-500 text-20">FOLDERS</h1>
                    <ul class="[ folders ]">
                        <li>
                            <button
                                onclick="drawPath(this, document.getElementById('about'))"
                            >
                                ABOUT
                            </button>
                        </li>
                        <li>
                            <button
                                onclick="drawPath(this, document.getElementById('about'))"
                            >
                                POSTS
                            </button>
                        </li>
                        <li>
                            <button
                                onclick="drawPath(this, document.getElementById('about'))"
                            >
                                PROJECTS
                            </button>
                        </li>
                        <li>
                            <button
                                onclick="drawPath(this, document.getElementById('about'))"
                            >
                                UTILITY
                            </button>
                        </li>
                    </ul>
                </nav>

                <main class="h-full flex flex-col grow">
                    <div class="space-y-2 mb-4 max-w-screen-sm [ files ]">
                        <button id="about" class="border-white bg-green-500/50">
                            ABOUT ME
                        </button>

                        <button class="border-green-500/25">
                            ABOUT THIS WEBSITE
                        </button>
                    </div>

                    <div class="bg-green-500 px-4">
                        <span class="text-green-900 leading-none"
                        >ABOUT ME</span
                        >
                    </div>

                    <section class="h-full border-2 border-green-500 p-4">
                        <img
                            src="https://avatars.githubusercontent.com/u/69802406?v=4"
                            alt="Foto de perfil"
                            class="size-64"
                        />

                        <p>Nome: Matheus Pissaia</p>
                        <p>Curso: Sistemas da Informação UFSC</p>
                        <p>Linguagens e tecnologias: TODO</p>

                        <a
                            href="https://github.com/matheus-pissaia"
                            title="Github"
                            target="_blank"
                            rel="noopener"
                        >
                            Github
                        </a>
                    </section>
                </main>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useTime } from './composables/time'

    const { currentTime } = useTime()
</script>
