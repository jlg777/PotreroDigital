const contenedor = document.querySelector('.contenedor')

document.getElementById('activar-flex').addEventListener('click', function () {
  contenedor.style.display = 'flex'
})

document.getElementById('desactivar-flex').addEventListener('click', function () {
  contenedor.style.display = 'block' // vuelve al flujo por defecto
})

document.getElementById('fdrow-flex').addEventListener('click', function () {
  contenedor.style.display = 'flex'
  contenedor.style.flexDirection = 'row'
})

document.getElementById('fdrowreverse-flex').addEventListener('click', function () {
  contenedor.style.display = 'flex'
  contenedor.style.flexDirection = 'row-reverse'
})

document.getElementById('fdcolumn').addEventListener('click', function () {
  contenedor.style.display = 'flex'
  contenedor.style.flexDirection = 'column'
})

document.getElementById('fdcolumnreverse').addEventListener('click', function () {
  contenedor.style.display = 'flex'
  contenedor.style.flexDirection = 'column-reverse'
})

document.getElementById('fwwrap').addEventListener('click', function () {
  contenedor.style.display = 'flex'
  contenedor.style.flexWrap = 'wrap'

  // Contar cuántos .flexbox hay
  const actuales = contenedor.querySelectorAll('.flexbox').length

  // Si hay menos de 9, agregar los que faltan
  for (let i = actuales; i < 9; i++) {
    const nuevo = document.createElement('div')
    nuevo.className = 'flexbox'
    nuevo.textContent = i + 1 // continuar numeración
    contenedor.appendChild(nuevo)
  }
})

document.getElementById('fwnowrap').addEventListener('click', function () {
  contenedor.style.display = 'flex'
  contenedor.style.flexWrap = 'nowrap'

  // Contar cuántos .flexbox hay
  const actuales = contenedor.querySelectorAll('.flexbox').length

  // Si hay menos de 9, agregar los que faltan
  for (let i = actuales; i < 9; i++) {
    const nuevo = document.createElement('div')
    nuevo.className = 'flexbox'
    nuevo.textContent = i + 1 // continuar numeración
    contenedor.appendChild(nuevo)
  }
})

document.getElementById('fwwrapreverse').addEventListener('click', function () {
  contenedor.style.display = 'flex'
  contenedor.style.flexWrap = 'wrap-reverse'

  // Contar cuántos .flexbox hay
  const actuales = contenedor.querySelectorAll('.flexbox').length

  // Si hay menos de 9, agregar los que faltan
  for (let i = actuales; i < 9; i++) {
    const nuevo = document.createElement('div')
    nuevo.className = 'flexbox'
    nuevo.textContent = i + 1 // continuar numeración
    contenedor.appendChild(nuevo)
  }
})

document.getElementById('jcfstart').addEventListener('click', function () {
  // 1. Vaciar el contenedor
  contenedor.innerHTML = ''

  contenedor.style.display = 'flex'
  contenedor.style.justifyContent = 'flex-start'
  contenedor.style.flexWrap = ''

  // 2. Crear 3 nuevos cuadrados con clase 'flexbox'
  for (let i = 1; i <= 3; i++) {
    const nuevo = document.createElement('div')
    nuevo.className = 'flexbox'
    nuevo.textContent = i
    contenedor.appendChild(nuevo)
  }
})

document.getElementById('jcfend').addEventListener('click', function () {
  // 1. Vaciar el contenedor
  contenedor.innerHTML = ''

  contenedor.style.display = 'flex'
  contenedor.style.justifyContent = 'flex-end'
  contenedor.style.flexWrap = ''

  // 2. Crear 3 nuevos cuadrados con clase 'flexbox'
  for (let i = 1; i <= 3; i++) {
    const nuevo = document.createElement('div')
    nuevo.className = 'flexbox'
    nuevo.textContent = i
    contenedor.appendChild(nuevo)
  }
})

document.getElementById('jcfcenter').addEventListener('click', function () {
  // 1. Vaciar el contenedor
  contenedor.innerHTML = ''

  contenedor.style.display = 'flex'
  contenedor.style.justifyContent = 'center'
  contenedor.style.flexWrap = ''

  // 2. Crear 3 nuevos cuadrados con clase 'flexbox'
  for (let i = 1; i <= 3; i++) {
    const nuevo = document.createElement('div')
    nuevo.className = 'flexbox'
    nuevo.textContent = i
    contenedor.appendChild(nuevo)
  }
})

document.getElementById('jcsbetween').addEventListener('click', function () {
  // 1. Vaciar el contenedor
  contenedor.innerHTML = ''

  contenedor.style.display = 'flex'
  contenedor.style.justifyContent = 'space-between'
  contenedor.style.flexWrap = ''

  // 2. Crear 3 nuevos cuadrados con clase 'flexbox'
  for (let i = 1; i <= 3; i++) {
    const nuevo = document.createElement('div')
    nuevo.className = 'flexbox'
    nuevo.textContent = i
    contenedor.appendChild(nuevo)
  }
})

document.getElementById('jcsaround').addEventListener('click', function () {
  // 1. Vaciar el contenedor
  contenedor.innerHTML = ''

  contenedor.style.display = 'flex'
  contenedor.style.justifyContent = 'space-around'
  contenedor.style.flexWrap = ''

  // 2. Crear 3 nuevos cuadrados con clase 'flexbox'
  for (let i = 1; i <= 3; i++) {
    const nuevo = document.createElement('div')
    nuevo.className = 'flexbox'
    nuevo.textContent = i
    contenedor.appendChild(nuevo)
  }
})

document.getElementById('aifs').addEventListener('click', function () {
  // 1. Vaciar el contenedor
  contenedor.innerHTML = ''

  // 2. Aplicar display flex y alineación
  contenedor.style.display = 'flex'
  contenedor.style.justifyContent = 'space-around'
  contenedor.style.alignItems = 'flex-start' // <-- alineación vertical superior
  contenedor.style.flexWrap = ''

  // 3. Crear 3 cuadrados con alturas crecientes
  for (let i = 1; i <= 3; i++) {
    const nuevo = document.createElement('div')
    nuevo.className = 'flexbox1'
    nuevo.textContent = i
    nuevo.style.height = `${30 + i * 10}px` // Ej: 40, 50, 60 px
    contenedor.appendChild(nuevo)
  }
})

document.getElementById('aife').addEventListener('click', function () {
  // 1. Vaciar el contenedor
  contenedor.innerHTML = ''

  // 2. Aplicar display flex y alineación
  contenedor.style.display = 'flex'
  contenedor.style.justifyContent = 'space-around'
  contenedor.style.alignItems = 'flex-end' // <-- alineación vertical superior
  contenedor.style.flexWrap = ''

  // 3. Crear 3 cuadrados con alturas crecientes
  for (let i = 1; i <= 3; i++) {
    const nuevo = document.createElement('div')
    nuevo.className = 'flexbox1'
    nuevo.textContent = i
    nuevo.style.height = `${30 + i * 10}px` // Ej: 40, 50, 60 px
    contenedor.appendChild(nuevo)
  }
})

document.getElementById('aic').addEventListener('click', function () {
  // 1. Vaciar el contenedor
  contenedor.innerHTML = ''

  // 2. Aplicar display flex y alineación
  contenedor.style.display = 'flex'
  contenedor.style.justifyContent = 'space-around'
  contenedor.style.alignItems = 'center' // <-- alineación vertical superior
  contenedor.style.flexWrap = ''

  // 3. Crear 3 cuadrados con alturas crecientes
  for (let i = 1; i <= 3; i++) {
    const nuevo = document.createElement('div')
    nuevo.className = 'flexbox1'
    nuevo.textContent = i
    nuevo.style.height = `${30 + i * 10}px` // Ej: 40, 50, 60 px
    contenedor.appendChild(nuevo)
  }
})

document.getElementById('ais').addEventListener('click', function () {
  // 1. Vaciar el contenedor
  contenedor.innerHTML = ''

  // 2. Aplicar display flex y alineación
  contenedor.style.display = 'flex'
  contenedor.style.justifyContent = 'space-around'
  contenedor.style.alignItems = 'stretch' // <-- alineación vertical superior
  contenedor.style.flexWrap = ''

  // 3. Crear 3 cuadrados con alturas crecientes
  for (let i = 1; i <= 3; i++) {
    const nuevo = document.createElement('div')
    nuevo.className = 'flexbox1'
    nuevo.textContent = i
    contenedor.appendChild(nuevo)
  }
})

document.getElementById('aib').addEventListener('click', function () {
  // 1. Vaciar el contenedor
  contenedor.innerHTML = ''

  // 2. Aplicar display flex y alineación
  contenedor.style.display = 'flex'
  contenedor.style.justifyContent = 'space-around'
  contenedor.style.alignItems = 'baseline' // <-- alineación vertical superior
  contenedor.style.flexWrap = ''

  // 3. Crear 3 cuadrados con alturas crecientes
  for (let i = 1; i <= 3; i++) {
    const nuevo = document.createElement('div')
    nuevo.className = 'flexbox1'
    nuevo.textContent = i
    nuevo.style.height = `${30 + i * 10}px` // Ej: 40, 50, 60 px
    contenedor.appendChild(nuevo)
  }
})

document.getElementById('acflexstart').addEventListener('click', function () {
  // 1. Vaciar el contenedor
  contenedor.innerHTML = ''

  // 2. Aplicar display flex y alineación
  contenedor.style.display = 'flex'
  contenedor.style.flexWrap = 'wrap'
  contenedor.style.alignContent = 'flex-end'

  // 3. Crear 3 cuadrados con alturas crecientes
  for (let i = 1; i <= 9; i++) {
    const nuevo = document.createElement('div')
    nuevo.className = 'flexbox1'
    nuevo.textContent = i
    nuevo.style.height = `30px`
    contenedor.appendChild(nuevo)
  }
})
