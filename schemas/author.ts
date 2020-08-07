interface IAuthorFields {
    name: string
    type: string
    title: string
}

interface IAuthor {
    name: string
    type: string
    title: string
    fields: Array<IAuthorFields>
}

export const Author: IAuthor = {
    name: 'author',
    type: 'document',
    title: 'Cadastre um novo autor',
    fields: [
        {
            name: 'Nome',
            type: 'string',
            title: 'Digite o nome do autor'
        },
        {
            name: 'email',
            type: 'string',
            title: 'Digite o email do autor'
        },
        {
            name: 'avatar',
            type: 'image',
            title: 'Imagem'
        },
    ]
}