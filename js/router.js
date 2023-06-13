export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
    // this routes são o mesmo dos routes abaixo no handle
  }

  route(event){
    event = event || window.event
    event.preventDefault()

    window.history.pushState({},"", event.target.href)

    this.handle()
    // dentro de uma instância, dentro de um par de chaves, sempre que eu quiser usar uma função, ou uma propriedade eu preciso utilizar o this. pois ele vai ser uma referência para o que eu quiser usar dentro do par de chaves
    // ou seja, esse handle ("ironicamente" this handle) é diferente do handle abaixo.
    }
    
    
  handle() {
  const { pathname } = window.location
  const route = this.routes[pathname] || this.routes[404]
  fetch(route)
  .then(data => data.text())
  .then(html => {
    document.querySelector('#app').innerHTML = html
    console.log(route)
  })

  switch (route) {
    case '/pagesUniverse.html':
      document.querySelector('body').classList.remove('body-1')
      document.querySelector('body').classList.remove('body-3')
    
      document.querySelector('body').classList.add('body-2')
      break
    case '/pages/Explore.html':
      document.querySelector('body').classList.remove('body-1')
      document.querySelector('body').classList.remove('body-2')

      document.querySelector('body').classList.add('body-3')
      break

    default:
      document.querySelector('body').classList.remove('body-2')
      document.querySelector('body').classList.remove('body-3')

      document.querySelector('body').classList.add('body-1')
      break
  }
  }
}
