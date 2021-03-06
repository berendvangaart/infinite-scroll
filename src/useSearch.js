import {useEffect, useState} from 'react'
import axios from 'axios'

export const useSearch = (query, pageNumber, ) => {

    useEffect(() => {
        axios({
           method: 'GET',
           url: 'http://openlibrary.org/search.json' ,
           params: {q: query, page: pageNumber}
        }).then(res => {
            console.log(res.data);
        })

    }, [query, pageNumber])
  return null
}

