import { ASSET_AVATARS } from "@app/_utilities/constants/paths";

export type TaskType = {
    id: number;
    completed: boolean;
    description: string;
    tags: number[],
    user: {
        id: number;
        name: string;
        profilePic: string;
    };
    dueDate: string;    
};

export const tasks: TaskType[] = [
    {
        id: 1,
        completed: true,
        description: 'Make the homepage dynamic',
        tags: [1, 2],
        user: {
            id: 100,
            name: 'Atul Midha',
            profilePic: `${ASSET_AVATARS}/avatar3.jpg`,
        },
        dueDate: 'July 07, 2020',
    },
    {
        id: 2,
        completed: false,
        description: 'Add the file formats in the data',
        tags: [2, 3],
        user: {
            id: 101,
            name: 'Murli Swami',
            profilePic: `${ASSET_AVATARS}/avatar5.jpg`,
        },
        dueDate: 'July 10, 2020',
    },
    {
        id: 3,
        completed: false,
        description: 'Add new page in the website.',
        tags: [1, 2, 4],
        user: {
            id: 102,
            name: 'Tanmay Goswami',
            profilePic: `${ASSET_AVATARS}/avatar7.jpg`,
        },
        dueDate: 'July 10, 2020',
    },
    {
        id: 4,
        completed: true,
        description: 'Assign the task to John Doe',
        tags: [3, 4],
        user: {
            id: 100,
            name: 'Atul Midha',
            profilePic: `${ASSET_AVATARS}/avatar3.jpg`,
        },
        dueDate: 'July 10, 2020',
    },
    {
        id: 5,
        completed: false,
        description: 'Re-design the components',
        tags: [4],
        user: {
            id: 100,
            name: 'Atul Midha',
            profilePic: `${ASSET_AVATARS}/avatar3.jpg`,
        },
        dueDate: 'July 06, 2020',
    },
    {
        id: 6,
        completed: true,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        tags: [4, 3],
        user: {
            id: 101,
            name: 'Murli Swami',
            profilePic: `${ASSET_AVATARS}/avatar5.jpg`,
        },
        dueDate: 'July 10, 2020',
    },
    {
        id: 7,
        completed: true,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        tags: [1, 2],
        user: {
            id: 102,
            name: 'Tanmay Goswami',
            profilePic: `${ASSET_AVATARS}/avatar7.jpg`,
        },
        dueDate: 'July 10, 2020',
    },
    {
        id: 8,
        completed: false,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        tags: [2, 3],
        user: {
            id: 101,
            name: 'Murli Swami',
            profilePic: `${ASSET_AVATARS}/avatar5.jpg`,
        },
        dueDate: 'July 10, 2020',
    },
    {
        id: 9,
        completed: false,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        tags: [4],
        user: {
            id: 100,
            name: 'Atul Midha',
            profilePic: `${ASSET_AVATARS}/avatar3.jpg`,
        },
        dueDate: 'July 06, 2020',
    },
    {
        id: 10,
        completed: true,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        tags: [3, 4],
        user: {
            id: 100,
            name: 'Atul Midha',
            profilePic: `${ASSET_AVATARS}/avatar3.jpg`,
        },
        dueDate: 'July 05, 2020',
    },
    {
        id: 11,
        completed: false,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        tags: [2],
        user: {
            id: 100,
            name: 'Atul Midha',
            profilePic: `${ASSET_AVATARS}/avatar3.jpg`,
        },
        dueDate: 'July 04, 2020',
    },
];

export type TaskCategoryType = {
    id: number;
    name: string;
    slug: string;
    userId?: number;
};

export const taskCategories: TaskCategoryType[] = [
    {id: 1, name: 'All Tasks', slug: 'all-tasks'},
    {id: 2, name: 'My Tasks', slug: 'my-tasks', userId: 100}
];

export type TaskTagType = {
    id: number;
    name: string;
    color: 'warning' | 'error' | 'success' | 'info';
};

export const taskTags: TaskTagType[] = [
    {
        id: 1,
        name: 'HTML',
        color: 'error',
    },
    {
        id: 2,
        name: 'React',
        color: 'success',
    },
    {
        id: 3,
        name: 'JavaScript',
        color: 'info',
    },
    {
        id: 4,
        name: 'CSS',
        color: 'warning',
    },
];


export function getTagById(id: number) {
    const tags = taskTags.filter(tag => tag.id === id);
    if(tags.length > 0) {
        return tags[0];
    }
    return null;
}