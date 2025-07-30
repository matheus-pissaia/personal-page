export const folders = {
    ABOUT: 'ABOUT',
    POSTS: 'POSTS',
    PROJECTS: 'PROJECTS',
    CORRUPTED: 'FOLDER CORRUPTED',
} as const

export type Folder = typeof folders[keyof typeof folders]

export const filesByFolder: Record<Folder, string[]> = {
    [folders.ABOUT]: ['ABOUT ME', 'ABOUT THIS WEBSITE'],
    [folders.POSTS]: ['POST 1', 'POST 2'],
    [folders.PROJECTS]: ['PROJECT 1', 'PROJECT 2'],
    [folders.CORRUPTED]: ['FILE CORRUPTED', ''],
} as const
