function Menu() {
    // const [text, setTexto] = useState(props.texto);
    // const [edad, setEdad] = useState(props.texto);
    // console.log(text,edad)
    return ( 
        <>
            <div id="menuIndex">
                <div class="blackbody">
                    <aside class="elevation-4">
                        <a href="#" class="d-flex justify-content-around">
                         <img
                            alt="AdminLTE Logo"
                            class="imageSize ml-3 mt-2"
                            
                         />
                         <h3 class="brand-text text-light mt-2" >ShopEtre</h3>
                        </a>

                        <div class="sidebar">

                            <li  class="nav-item menu-open">
                                <div
                                
                                id="btn_home"
                                class="nav-link active d-flex "
                                target="central">
                                
                                <img 
                                alt="Imagen"
                                    class=" imageSize ml-3"/>
                                <b><p class="ml-3 mt-1" >Inicio</p></b>
                                </div>
                            </li>

                            <li >
                                <button>
                                <div class="d-flex mt-2">
                                    <div class="d-flex">
                                    <img
                                    alt=""
                                        class="m-right imageSize"
                                    />
                                    </div>

                                    <div class="d-flex align-items-center">
                                    <p class="font-weight-bold text-light ml-4">Productos</p>
                                    </div>
                                </div>
                                </button>
                            </li>

                            <li  class="nav-item has-treeview">
                                <div class="d-flex mt-2">
                                <img
                                    alt=""
                                    src="@/assets/Iconos/Reception-50-100px-2/icons8-reception-50.png"
                                    class="imageSize ml-2"/>
                                <b><p class="text-light ml-4">Clientes</p></b>
                                </div>
                            </li>
                        </div>
                    </aside>
                </div>
            </div>               
        </>

    )
}

export default Menu;