const productos = [
  {
    id: '1',
    nombre: 'Remera Oversize',
    descripcion: 'Remera de algodón peinado premium',
    precio: 5000,
    categoria: 'remeras',
  },
  {
    id: '2',
    nombre: 'Pantalón Jogger',
    descripcion: 'Jogger cargo negro',
    precio: 8500,
    categoria: 'pantalones',
  },
  {
    id: '3',
    nombre: 'Gorra Negra',
    descripcion: 'Gorra urbana con visera curva',
    precio: 3000,
    categoria: 'accesorios',
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};

export const getProductoPorId = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find((p) => p.id === id));
    }, 1000);
  });
};
