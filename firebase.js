// Firebase 설정 객체 (Firebase 콘솔에서 사용 가능)
const firebaseConfig = {
    apiKey: "AIzaSyADSKPKR3XWSXhXpG6ByEQfAY-JkWMKoPs",
    authDomain: "gais5js-test.firebaseapp.com",
    databaseURL: "https://gais5js-test-default-rtdb.firebaseio.com",
    projectId: "gais5js-test",
    storageBucket: "gais5js-test.appspot.com",
    messagingSenderId: "549136347186",
    appId: "1:549136347186:web:7bf023538c30ec139f8c2b"
  };
  
  // Firebase 앱 초기화
  const app = firebase.initializeApp(firebaseConfig);
  
  // Firebase 실시간 데이터베이스 초기화
  const database = firebase.database();
  
  // 데이터 쓰기 예제
  function writeUserData(userId, name, email) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email
    });
  }
  
  // 데이터 읽기 예제
  function readUserData(userId) {
    const userRef = firebase.database().ref('users/' + userId);
    userRef.once('value').then((snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  }
  
  // 사용 예제
  let addUserBtn= document.getElementById('addUserBtn')
  let getUserBtn= document.getElementById('getUserBtn') 

  addUserBtn.addEventListener('click', ()=>{
    writeUserData('user1', 'John Doe', 'john.doe@example.com');
  })

  getUserBtn.addEventListener('click', ()=>{
    readUserData('user1')
  })