import React from 'react'
import Img01 from '../../assets/img/section04_1.png'
import Img02 from '../../assets/img/section04_2.png'
import Img03 from '../../assets/img/section04_3.png'
import Img04 from '../../assets/img/section04_4.png'

const Section05 = () => {
    return (
        <div className='Section05_wrap'>
            {/* 헤더 섹션: Figma 레이아웃을 참고하여 제목을 <h3>과 <h1> 태그로 작성하세요. */}
            
            <div className="header">
                {/* LIKELION MEDIA를 작성하세요. */}
                {/* 언론 속의 LIKELION를 작성하세요. */}
                <h3>LIKELION MEDIA</h3>
                <h1>언론 속의 LIKELION</h1>
            </div>
            
            <div className="main">
                {/* 각 뉴스 항목을 <div> 태그로 감싸고, 내부에 <img>와 텍스트 블록을 포함하세요. */}

                <div>
                    {/* <img> 태그로 뉴스 이미지를 삽입하고, 속성(이미지 대체 텍스트)으로 "Img01"을 사용하세요. */}
                    <img src={Img01} alt='Img01'/>
                    <div>
                        {/*뉴스 제목을 작성하세요. */}

                        {/* 뉴스 요약을 className='text'와 함께 작성하세요. */}

                        {/* 출판 정보를 className='info'와 함께 작성하세요. */}
                        <h3>"비즈니스 문제 해커톤으로 해결"... 멋쟁이 사자처럼, 기업 해커톤 출시</h3>
                        <p className='text'>정보기술(IT) 교육 기업 멋쟁이사자처럼(멋사)은 31일부터 해커톤 참가자들을 통해 기업이 가진 비즈니스 문제를...</p>
                        <p className='info'>머니S | 2023.10.31</p>
                    </div>
                </div>
                {/* 다음 세 뉴스 항목에 대해서도 동일한 구조를 반복하세요. */}


                <div>
                    {/* <img> 태그로 뉴스 이미지를 삽입하고, 속성(이미지 대체 텍스트)으로 "Img01"을 사용하세요. */}
                    <img src={Img02} alt='Img02'/>
                    <div>
                        {/*뉴스 제목을 작성하세요. */}

                        {/* 뉴스 요약을 className='text'와 함께 작성하세요. */}

                        {/* 출판 정보를 className='info'와 함께 작성하세요. */}
                        <h3>P2E ‘실타래‘, 편의성 강화해 진입 장벽 낮춘다</h3>
                        <p className='text'>정보기술(IT) 교육 기업 멋쟁이사자처럼(멋사)은 31일부터 해커톤 참가자들을 통해 기업이 가진 비즈니스 문제를...</p>
                        <p className='info'>머니S | 2023.10.31</p>
                    </div>
                </div>

                <div>
                    {/* <img> 태그로 뉴스 이미지를 삽입하고, 속성(이미지 대체 텍스트)으로 "Img01"을 사용하세요. */}
                    <img src={Img03} alt='Img03'/>
                    <div>
                        {/*뉴스 제목을 작성하세요. */}

                        {/* 뉴스 요약을 className='text'와 함께 작성하세요. */}

                        {/* 출판 정보를 className='info'와 함께 작성하세요. */}
                        <h3>"비즈니스 문제 해커톤으로 해결"... 멋쟁이 사자처럼, 기업 해커톤 출시</h3>
                        <p className='text'>정보기술(IT) 교육 기업 멋쟁이사자처럼(멋사)은 31일부터 해커톤 참가자들을 통해 기업이 가진 비즈니스 문제를...</p>
                        <p className='info'>머니S | 2023.10.31</p>
                    </div>
                </div>

                <div>
                    {/* <img> 태그로 뉴스 이미지를 삽입하고, 속성(이미지 대체 텍스트)으로 "Img01"을 사용하세요. */}
                    <img src={Img04} alt='Img04'/>
                    <div>
                        {/*뉴스 제목을 작성하세요. */}

                        {/* 뉴스 요약을 className='text'와 함께 작성하세요. */}

                        {/* 출판 정보를 className='info'와 함께 작성하세요. */}
                        <h3>"비즈니스 문제 해커톤으로 해결"... 멋쟁이 사자처럼, 기업 해커톤 출시</h3>
                        <p className='text'>정보기술(IT) 교육 기업 멋쟁이사자처럼(멋사)은 31일부터 해커톤 참가자들을 통해 기업이 가진 비즈니스 문제를...</p>
                        <p className='info'>머니S | 2023.10.31</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section05
