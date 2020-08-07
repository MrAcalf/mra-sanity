interface IPostFields {
    name: string
    type: string
    title?: string
    to?: {}
    of?: {}
}

interface IPost {
    name: string
    type: string
    title: string
    fields: Array<IPostFields>
}

export const Post: IPost = {
    name: 'post',
    type: 'document',
    title: 'Crie seu post',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Crie um título para seu post'
        },
        {
            name: 'author',
            title: 'Autor',
            type: 'reference',
            to: [{ type: 'author' }],
        },
        {
            name: 'content',
            title: 'Conteúdo do post',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'excerpt',
            title: 'Resumo',
            type: 'string',
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'category',
            title: 'Categorias',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
        },
        {
            name: 'date',
            title: 'Data da postagem',
            type: 'datetime',
        },          
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
        },
    ]
}