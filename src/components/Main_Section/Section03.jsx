import React from 'react'
import Img01 from '../../assets/img/section03_1.png'
import Img02 from '../../assets/img/section03_2.png'
import Img03 from '../../assets/img/section03_3.png'

const Section03 = () => {
    return (
        <div className='Section03_wrap'>
            
            <div>
                {/*Figma 레이아웃을 참고하여 적절한 <img> 태그를 사용하세요. 이미지 대체 텍스트 이름은 Img01 */}
                <img src={Img01} alt="Img01" />
                <div>
                    {/* <p> 태그를 사용하여 'VISION' 라벨을 작성하세요. 이때 클래스이름은 tage */}
                    {/* <h2>와 <p>를 사용하여 본문 설명(IT 교육 기회를 제공하여 꿈꾸던 가능성을 열어준다.)을 작성하세요. */}
                    <p className='tage'>Vision</p>
                    <h2><p>IT 교육 기회를 제공하여 꿈꾸던 가능성을 열어준다.</p></h2>
                  

                    {/* <p> 태그를 사용하여 figma 라벨을 작성하세요.이때 클래스이름은 english */}
                    {/* Open up the possibility of dreaming by providing IT education opportunities.<>*/}
                    <p className='english'>Open up the possibility of dreaming by providing IT education opportunities.</p>
                </div>
            </div>
            
            
            <div>
                {/*두번째 세션도 위와 동일하게 <p> 태그를 사용하여 'VISION' 라벨을 작성. 이때 클래스이름은 right */}
                
                    {/* 태그 라벨 및 본문 설명 추가-> <p>(클래스이름은 tage로), <h2>, 태그를 사용하여 작성하세요.*/}
                <div>
                <p className='right'>Vision</p>
                <h2><p className='tage'>IT 가술로 IT 교육의 문제를 해결한다.</p></h2>
                <p className='english'>Open up the possibility of dreaming by providing IT education opportunities.</p>
                </div>
                
                {/* 이미지 삽입: Figma 레이아웃을 참고하여 적절한 <img> 태그를 사용하세요. 이미지 대체 텍스트 이름은 Img02 */}
                <img src={Img02} alt="Img02" />
            </div>
            
            
            <div>
                {/*Figma 레이아웃을 참고하여 <img> 태그를 사용하세요. 이미지 대체 텍스트 이름은 Img03 */}
                
                {/*위와 동일하게 <p> 태그를 사용하여 'VISION' 라벨을 작성. 클래스이름은 tage와 english 사용해야함*/}
                <img src={Img03} alt="Img03" />
                <div>
                    <p className='tage'>Vision</p>
                    <h2><p>지속 성장이 가능한 IT 커뮤니티를 구축한다.</p></h2>
                    <p className='english'>Open up the possibility of dreaming by providing IT education opportunities.</p>
                </div>
            </div>
        </div>
    )
}

export default Section03

