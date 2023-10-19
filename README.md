# react-Shop-App

### [전체적인 구성]

- react-router-dom 을 이용해서 여러 페이지에 접근이 가능하도록 Route 설정.(Homepage, Detailpage, Cartpage, Loginpage, Registerpage, Userpage)
- useState를 이용해서 상태 관리(redux로 해보고 싶었지만.. 아직 잘 다룰 줄 몰라서..)
- Firebase로 로그인 기능 구현


### [카테고리 탭]
![카테고리 탭](https://github.com/Jiiker/react-Shop-App/assets/100774811/5c35785f-159d-4f9c-b51e-b43862e32168)

- axios 활용하여 fakestore api로부터 데이터를 받아와서 productList 에 오브젝트 배열로 담음.
- 카테고리 탭 클릭시 해당 카테고리에 해당하는 product 데이터만 불러와서 렌더링.




### [상품별 상세 페이지]
![상품별 상세 페이지](https://github.com/Jiiker/react-Shop-App/assets/100774811/878cadbc-6918-4642-8850-51cabf664298)

- product 리스트 태그 클릭시 상세 페이지로 이동하는 Link 설정.
- 상세 페이지 내부에서는 클릭한 리스트의 id에 해당하는 데이터 정보를 가져와서 렌더링.




### [장바구니 기능]
![장바구니 기능](https://github.com/Jiiker/react-Shop-App/assets/100774811/4011660a-f143-4c20-829e-c3260461647c)

- add to cart 버튼 클릭시 cartList에 해당 상품의 데이터를 담음.
- 이 때, 해당 상품의 객체에 count라는 프로퍼티를 추가.
- 만약 이미 해당 상품에 관한 데이터가 있는 경우 담겨있는 데이터의 count프로퍼티를 1만큼 증가.
- cartList에 상품이 담길 때, 지워질 때 마다 상품 수의 합계를 계산해서 header 부분의 장바구니 버튼에 배지로 표시.




### [로그인 페이지 및 회원가입 페이지]
![로그인 페이지 및 회원가입 페이지](https://github.com/Jiiker/react-Shop-App/assets/100774811/89bb74b6-2fad-4931-ab8a-6e32b88a30e9)

- 로그인을 하지 않았을 때는 상단 최우측 버튼이 로그인 아이콘으로 표시.
- 로그인을 하지 않았을 때 유저 아이콘 혹은 로그인 아이콘을 누를 시 로그인 페이지로 이동하도록 설정.
- 로그인 페이지에서 회원가입 페이지로 이동할 수 있도록 설정. 



### [Firebase를 사용한 회원가입 및 로그인]
![회원가입 및 로그인](https://github.com/Jiiker/react-Shop-App/assets/100774811/364af3f1-f704-490d-b812-ca61f65d2710)

- Firebase 홈페이지 시작 가이드에 따라 코드 작성.
- createUserWithEmailAndPassword 함수 이용하여 회원가입 기능 구현.
- Firebase 특성상 회원가입시 바로 로그인이 되기 때문에 회원가입이 완료되면 useNavigate를 사용해 홈 화면으로 이동.
- 회원가입 된 이메일 및 비밀번호를 통해 로그인 가능.
- 로그인을 했을 경우 상단 최우측 버튼이 로그아웃 아이콘으로 바뀌도록 설정.
- 로그인을 했을 경우 유저페이지에 들어가면 유저의 이메일이 뜨도록 설정.

