import type { Component } from 'vue'
import { AboutMe, AboutThisWebsite } from './About'

export const folders = {
    ABOUT: 'ABOUT',
    POSTS: 'POSTS',
    PROJECTS: 'PROJECTS',
    CORRUPTED: 'FOLDER CORRUPTED',
} as const

export type Folder = typeof folders[keyof typeof folders]

export const fileComponentsByFolder: Record<Folder, Record<string, Component | null>> = {
    [folders.ABOUT]: {
        'ABOUT ME': AboutMe,
        'ABOUT THIS WEBSITE': AboutThisWebsite,
    },
    [folders.POSTS]: {
        'POST 1': null,
        'POST 2': null,
    },
    [folders.PROJECTS]: {
        'PROJECT 1': null,
        'PROJECT 2': null,
    },
    [folders.CORRUPTED]: {
        'ERROR': null,
    },
}

export const filesByFolder = Object.fromEntries(
    Object
        .entries(fileComponentsByFolder)
        .map(([folder, fileComponents]) => [folder, Object.keys(fileComponents)]),
) as Record<Folder, string[]>
