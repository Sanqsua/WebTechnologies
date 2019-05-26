class Startpage extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <Login />
        <Main />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<Startpage />, document.getElementById('root'))