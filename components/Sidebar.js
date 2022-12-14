import Image from "next/image";
import useQuiosco from '../hooks/useQuiosco';
import Categoria from "./Categoria";


const Sidebar = () => {
  const { categorias } = useQuiosco();

  return (
    <>
        <div className="flex items-center justify-center">
          <Image
              width={150}
              height={70}
              src="/assets/img/logo.svg"
              alt="imagen logotipo"
          />
        </div>
       

        <nav className="mt-10">
          {categorias.map(categoria => (
            <Categoria 
              key={categoria.id}
              categoria={categoria}
            />
          ))}
        </nav>
    </>
  )
}

export default Sidebar;