'use client'

import { useRouter } from "next/navigation"

export default function DetailLink(props) {
    let router = useRouter();   
    let detailId = props.id;
    
    return (
       console.log(props.id)
    )
}

/**
 * rounter.back() 뒤로가기
 * router.forward() 앞으로가기
 * router.refresh() 새로고침(변동있는 내용만)
 * routner.prefetch() 페이지 미리로드
 */