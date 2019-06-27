class Home extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <Account />
        <Main />
      </div>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById('root'))