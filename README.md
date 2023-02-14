## 1. [Carousel](https://github.com/CCCWS/react-component/tree/main/carousel)
   * 크기
      * width - 부모 컴포넌트의 100%
      * height - props로 넘겨준 값  
      
      
      
   * 공통 옵션  
   
|   옵션명           | 타입                |   필수 여부                |기본값            |  설명            | 
| :---------------:  |   :--------------------:  | :--------------------:  | :--------------------:  |:--------------------:  |
|     children         |       React.ReactNode         |     1개 이상       |  null       | 사용할 컴포넌트       |
|     height         |       string        |     필수         |   null       | Carousel의 높이         | 
|     point         |      boolean        |     선택    |   false       | 전체 컴포넌트의 수 및 현재위치 표시         |
|     auto         |       boolean        |     선택         |false       |     다음으로 자동 이동, 마우스가 닿아 있는 동안은 이동하지 않음           | 
|     delay         |       number        |     auto 사용시 필수         |null       |     자동 이동 대기시간         | 




  * Type 1
     * 선택 옵션  
   
|   옵션명           | 타입                |   필수 여부                | 기본값            |설명            | 
| :---------------:  |   :--------------------:  | :--------------------:  |:--------------------:  |:--------------------:  |
|     slide         |       boolean         |    slide / fade 택1 필수      |false       |     컴포넌트 넘길시 slide 효과       |
|     fade         |      boolean        |     slide / fade 택1 필수     | false       |     컴포넌트 넘길시 fade 효과         |
|     nextBtn         |       boolean        |     선택         |false       |     이전, 다음 버튼         | 
|     swipe         |       boolean        |     선택         |false       |     스와이프하여 이전, 다음 이동         | 

|                   slide            |                    fade                      |
| :---------------------------------------------: | :---------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/86645532/202850409-9bc59588-4568-442e-9c65-e3d6b9514ef5.gif"  width="300px"> | <img src="https://user-images.githubusercontent.com/86645532/202850414-82058546-29c4-4686-9bad-91a5b304e21f.gif"  width="300px"> |  
|                    swipe                      |
  | <img src="https://user-images.githubusercontent.com/86645532/204001002-339f5008-486d-4698-b99e-68bf572ffc4f.gif"  width="300px"> |  
  


  * Type 2
     * 추가 옵션 없음
     <img src="https://user-images.githubusercontent.com/86645532/202850493-8878757d-26fc-4a08-85c8-479933018023.gif" width="300px" >
     
  * 사용예시
  
  ```javascript
 return (
    <Carousel 
      slide={true}
      height={"400px"} 
      point={true} 
      auto={true}
      delay={2000}
     >
      <div>테스트1</div>
      <div>테스트2</div>
      <div>테스트3</div>        
    </Carousel>
  );
```

## 2. [Carousel Infinite Loop ver.](https://github.com/CCCWS/react-component/blob/main/carousel/Carousel_Infinite_Loop.js)
   * 크기
      * width - 부모 컴포넌트의 100%
      * height - props로 넘겨준 값
      
   * 옵션  
   
|   옵션명           | 타입                |   필수 여부                |기본값            |  설명            | 
| :---------------:  |   :--------------------:  | :--------------------:  | :--------------------:  |:--------------------:  |
|     children         |       React.ReactNode         |     1개 이상       |  null       | 사용할 컴포넌트       |
|     height         |       string        |     필수         |   null       | Carousel의 높이         | 
|     point         |      boolean        |     선택    |   false       | 전체 컴포넌트의 수 및 현재위치 표시         |
|     nextBtn         |       boolean        |     선택         |false       |     이전, 다음 버튼         | 
|     auto         |       boolean        |     선택         |false       |     다음으로 자동 이동, 마우스가 닿아 있는 동안은 이동하지 않음           | 
|     autoDelay         |       number        |     auto 사용시 필수         |null       |     자동 이동 대기시간         | 
|     transitionDuration         |       number        |     선택         |null       |     슬라이드 애니메이션 지속시간         | 

*children이 하나라면 point와 nextBtn을 true로 주어도 화면에 표시되지 않음.  
*transitionDuration의 값을 입력하지 않거나 0일 경우 애니메이션이 발생하지 않음. 

<img src="https://user-images.githubusercontent.com/86645532/212328928-59168716-9aa4-4e42-8ef8-072c2dfaf46a.gif" width="500px">  


  * 사용예시
  
  ```javascript
 return (
    <CarouselInfiniteLoop 
       height={"500px"}
       transitionDuration={500}
       point={true}
       nextBtn={true}
       auto={true}
       autoDelay={1000}
     >
      <div>1</div>
      <div>2</div>
      <div>3</div>        
    </CarouselInfiniteLoop>
  );
``` 
     
     
## 3. [Modal](https://github.com/CCCWS/react-component/blob/main/modal/Modal.js)
   * 크기
      * width - 자식 컴포넌트에 따라 변화
      * height - 자식 컴포넌트에 따라 변화
      
   * 옵션  
   
   |   옵션명           | 타입                |   필수 여부                |기본값            |  설명            | 
| :---------------:  |   :--------------------:  | :--------------------:  | :--------------------:  |:--------------------:  |
|     children         |       React.ReactNode         |     1개 이상       |  null       | 사용할 컴포넌트       |
|     open         |       boolean        |     필수         |   null       | modal 상태         | 
|     setOpen         |      function        |     필수    |   null       | modal 상태 변경         |
|     onPushEscapeClose         |       boolean         |     선택       |  false       | esc키를 눌러 modal 닫기       |
|     onClickBackgroundClose         |       boolean        |     선택         |   false       | 배경을 눌러 modal 닫기         | 
|     onCloseBtn         |      boolean        |     선택    |   false       | 기본 닫기 버튼         |
|     backgroundColor         |      string        |     선택    |   rgba(165, 165, 165, 0.3)       | 배경색         |

<img src="https://user-images.githubusercontent.com/86645532/202905346-065edfda-6701-4e96-a81c-65d1a7266910.gif">  

  * 사용예시
  
  ```javascript
const App = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        onPushEscapeClose={true}
        onClickBackgroundClose={true}
        onCloseBtn={true}
        backgroundColor={"rgba(0,0,0,0.5)"}
      >
        <Div>TEST</Div>
      </Modal>

      <button onClick={() => setOpenModal(!openModal)}>열기</button>
    </>
  );
};

const Div = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
```  

## 4. [SelectBox](https://github.com/CCCWS/react-component/blob/main/SelectBox/SelectBox.js)  
   * 크기
      * width - props로 넘겨준 값 
      * height - 폰트 에 따라 변화
      
   * 옵션  
   
   |   옵션명           | 타입                |   필수 여부                |기본값            |  설명            | 
| :---------------:  |   :--------------------:  | :--------------------:  | :--------------------:  |:--------------------:  |
|     dataArr         |       array         |     필수       |  null       | 선택할 데이터       |
|     width         |       string        |     필수         |   null       | SelectBox 길이         | 
|     selectValue         |      string        |     필수    |   null       | 선택한 값         |
|     setSelectValue         |       function         |     필수       |  null       | 선택한 값 변화       |
|     slide         |       boolean        |     slide / fade 택1 필수         |   false       | 선택지 목록을 열때 slide 효과         | 
|     fade         |      boolean        |     slide / fade 택1 필수    |   false       | 선택지 목록을 열때  효과         |
|     searchBar         |      boolean        |     선택    |   false       | 목록 검색        |

|                   slide            |                    fade                      |                 searchBar                      |
| :---------------------------------------------: | :---------------------------------------------: | :---------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/86645532/204148527-d9068813-e86c-4861-ab2c-06bb4068977e.gif"  width="200px"> | <img src="https://user-images.githubusercontent.com/86645532/204148528-08bbe83f-5ebd-45bd-93ba-154f2a1b4fdb.gif"  width="200px"> |   <img src="https://user-images.githubusercontent.com/86645532/213494703-4dd6e28a-615a-49fe-85a5-7051bf2dbec0.gif"  width="200px"> |  


  * 사용예시
  
  ```javascript
const App = () => {  
  const [selectValue, setSelectValue] = useState("기본값");
  const dataArr = ["선택값1","선택값2","선택값3","선택값4","선택값5","선택값6","선택값7"];
  
  return (
    <SelectBox
    dataArr={dataArr}
    width={"200px"}
    selectValue={selectValue}
    setSelectValue={setSelectValue}
    slide={true}
    />
  );
};
```  


## 5. [One Page Scroll](https://github.com/CCCWS/react-component/blob/main/One_Page_Scroll/OnePageScroll.tsx)  
   * 크기
      * width - 100vw 
      * height - 100vh
      
   * 옵션  
   
   |   옵션명           | 타입                |   필수 여부                |기본값            |  설명            | 
| :---------------:  |   :--------------------:  | :--------------------:  | :--------------------:  |:--------------------:  |
|     children         |       React.ReactNode         |     2개 이상       |  null       | 사용할 컴포넌트       |
|     delay         |       number         |     필수       |  null       | 마우스휠로 페이지이동 딜레이       |
|     point         |       boolean        |     선택         |  false       | 현재 페이지 위치 표시         | 


|                               | 
| :---------------------------------------------: | 
| <img src="https://user-images.githubusercontent.com/86645532/210561705-7fd86081-750e-4063-bae4-b25df8308e1d.gif"  width="400px">  |


  * 사용예시
  
  ```javascript
const App = () => {  
  return (
    <VerticalCarousel delay={1000} point={true}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </VerticalCarousel>
  );
};
```  


## 6. [Hamburger Button](https://github.com/CCCWS/react-component/blob/main/HamburgerBtn/HamburgerBtn.js)  
   * 크기
      * width - 30px 
      * height - 30px
      
   * 옵션  
   
   |   옵션명           | 타입                |   필수 여부                |기본값            |  설명            | 
| :---------------:  |   :--------------------:  | :--------------------:  | :--------------------:  |:--------------------:  |
|     btnClick         |       boolean         |     필수       |  null       | 클릭 상태       |
|     setBtnClick         |       function         |     필수       |  null       | 클릭 상태 변경       |



<img src="https://user-images.githubusercontent.com/86645532/212288506-42f6a54c-da7b-4931-a0cf-1fb3bdcaabc7.gif"  width="200px"> 


  * 사용예시
  
  ```javascript
const App = () => {  
  const [click, setClick] = useState(false);
  
  return (
    <HamburgerBtn btnClick={click} setBtnClick={setClick} />
  );
};
```  

## 7. [Image Viewer](https://github.com/CCCWS/react-component/blob/main/Image%20Viewer/ImageViewer.js)

   * 크기
      * width - props로 넘겨준값 px
      * height - width와 동일
      
   * 옵션  
   
   |   옵션명           | 타입                |   필수 여부                |기본값            |  설명            | 
| :---------------:  |   :--------------------:  | :--------------------:  | :--------------------:  |:--------------------:  |
|     size         |       number         |    필수       |  null       | 컴포넌트의 크기       |
|     img         |       string         |     필수       |  null       | 화면에 출력할 이미지        |


|                   가로 이미지            |                    세로 이미지                      |
| :---------------------------------------------: | :---------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/86645532/218731465-69cf3047-5c69-4c44-836d-ab85948c5865.gif"  width="400px"> | <img src="https://user-images.githubusercontent.com/86645532/218731513-8924c84f-919a-4549-a24a-3855813efe02.gif"  width="400px"> |  


  * 사용예시
```javascript
<ImageViewer size={300} img={myImg} />
``` 
      
      
 








