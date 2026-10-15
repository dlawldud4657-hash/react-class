import './App.css'

function App() {
  const points = [
    {id: 1, title: '가입 축하 포인트', point: 10000},
    {id: 2, title: '상품 구매', point: 2000},
    {id: 3, title: '후기 작성', point: 500},]
  return (
    <main>

      <h1>
        포인트 관리 프로그램
      </h1>

      <h2>
        포인트 내역
      </h2>
      
      {}
      {points.map((item) => (
        <div key={item.id}> {}
        <span>{item.title}</span> {}
        <strong>{item.point} P</strong>{}
        </div>
      ))}
    </main>
  )
}

export default App