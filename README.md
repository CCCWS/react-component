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
     
     
## 2. [Modal](https://github.com/CCCWS/react-component/blob/main/modal/Modal.js)
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

## 3. [SelectBox](https://github.com/CCCWS/react-component/blob/main/SelectBox/SelectBox.js)  
   * 크기
      * width - props로 넘겨준 값 
      * height - 글자 크기에 따라 변화
      
   * 옵션  
   
   |   옵션명           | 타입                |   필수 여부                |기본값            |  설명            | 
| :---------------:  |   :--------------------:  | :--------------------:  | :--------------------:  |:--------------------:  |
|     dataArr         |       array         |     필수       |  null       | 선택할 데이터       |
|     width         |       string        |     필수         |   null       | SelectBox 길이         | 
|     selectValue         |      string        |     필수    |   null       | 선택한 값         |
|     setSelectValue         |       function         |     필수       |  null       | 선택한 값 변화       |
|     slide         |       boolean        |     slide / fade 택1 필수         |   false       | 선택지 목록을 열때 slide 효과         | 
|     fade         |      boolean        |     slide / fade 택1 필수    |   false       | 선택지 목록을 열때  효과         |

|                   slide            |                    fade                      |
| :---------------------------------------------: | :---------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/86645532/204145218-031e732d-4f2d-49d3-ab90-234dbe99c333.gif"  width="200px"> | <img src="https://user-images.githubusercontent.com/86645532/204145228-908978da-986d-4745-b443-03b0ffce4605.gif"  width="200px"> |  






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
     
     
     


     







