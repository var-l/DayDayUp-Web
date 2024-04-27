import request from '@/utils/request'

// 新增
export function createBooks(data) {
    return request({
        url: '/note/books/create',
        method: 'post',
        data
    })
}

export function getBooks(id) {
    return request({
        url: '/note/books/getList',
        method: 'get',
    })
}
