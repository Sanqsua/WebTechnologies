class Startpage extends React.Component {
  render(){
    return(
      <div>
        <Login />
        <Main />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<Startpage />, document.getElementById('root'))