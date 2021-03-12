import cls from './App.module.css'
import Counter from './Counter/Counter'


function App() {
  return (
    <section className={cls.section}>
      <Counter min={1} max={5}/>
    </section>
  )
}

export default App
