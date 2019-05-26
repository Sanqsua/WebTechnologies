class Home extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById('root'))