import './index.css';
import { Swiper, SwiperSlide, Autoplay } from 'swiper/react';
import 'swiper/css';

function App() {

  const Nav = ["추사김정희", "추사고택", "추사기념관", "추사체험관", "커뮤니티", "기념관 소개"]

  return (
    <>
    {/* Nav 시작 */}
    <div className="container w-screen h-20">
      <div className="wrapper w-screen flex h-full items-center">
        <div className="logo flex ml-20 basis-1/3">
          <img src="https://www.yesan.go.kr/images/chusa/common/ys_logo.png" alt="logo"/>
          <img src="https://www.yesan.go.kr/images/chusa/common/logo.png" alt="logo2"/>
        </div>
        <div className="navigation basis-2/3">
          <ul className="flex text-lg font-semibold w-full">
          {
            Nav.map((e,i)=>{
              return(
              <li className="basis-1/6" key={i}>{e}</li>
              )
            })
          }
          </ul>
        </div>
        <div className="else flex basis-1/4 justify-end">
          <ul className="flex gap-x-8 items-center text-sm">
            <li className="relative sudo">HOME</li>
            <li>예산군청</li>
            <div className="h-20 w-20 bg-black">
              <div className="hamburger mt-6 ml-4">
                <div className="h-0.5 w-8 bg-white m-2"></div>
                <div className="h-0.5 w-6 bg-white my-2 ml-4"></div>
                <div className="h-0.5 w-8 bg-white m-2"></div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
    {/* Nav 끝 */}
    {/* Slide 시작 */}
    <div className='relative bgi bg-cover bg-center w-8/12 h-[870px]'>
      <img className='absolute bottom-[29%] left-[12.7%]' src="../images/title.png" alt="title" />
      <img className='absolute bottom-[29%] left-[23.7%]' src="../images/title_sub.png" alt="sub" />
      <Swiper
      slidesPerView={1}
      className='absolute left-[42.2%] h-[770px] overflow-hidden'
    >
      <SwiperSlide className='absolute top-[-20px]'>
        <img src="../images/POZS_202209200915357560.png" alt="img1"className='w-full'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="../images/POZS_202209200916039170.png" alt="img2" className='w-full'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="../images/POZS_202209200916217840.png" alt="img3" 
        className='w-full'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="../images/POZS_202209200916403560.png" alt="img4" className='w-full'
        />
      </SwiperSlide>
    </Swiper>
    </div>
    <div className='absolute bottom-[9%] flex left-[28.35%] z-10'>
      <div className="prev w-24 h-24 bg-[#A48867] text-white text-center leading-[90px] rounded-bl-lg">이전</div>
      <div className="next w-24 h-24 bg-[#4C3600] text-white text-center leading-[90px] rounded-tr-lg">다음</div>
    </div>
    {/* Slide 끝 */}
    </>
  );
}

export default App;
