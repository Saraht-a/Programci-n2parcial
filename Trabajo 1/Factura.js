// Arreglo con precios de artículos por código (índice)
let precios = [50.00, 75.00, 100.00, 150.00]; 
let impuesto = 0.15; // 15% de ISV

// Datos de entrada simulados
let codigoArticulo = 2; // Por ejemplo, código 2 (precio: 100.00)
let cantidad = 3;

// Obtener el precio unitario del artículo
let precioUnitario = precios[codigoArticulo];

// Calcular totales
let totalArticulo = precioUnitario * cantidad;
let subtotal = totalArticulo;
let impuestoVenta = subtotal * impuesto;
let totalGeneral = subtotal + impuestoVenta;

// Imprimir factura
console.log("----- Factura FECOSA -----");
console.log(`Código del artículo: ${codigoArticulo}`);
console.log(`Cantidad: ${cantidad}`);
console.log(`Precio unitario: L. ${precioUnitario.toFixed(2)}`);
console.log(`Total por artículo: L. ${totalArticulo.toFixed(2)}`);
console.log(`Subtotal: L. ${subtotal.toFixed(2)}`);
console.log(`ISV (15%): L. ${impuestoVenta.toFixed(2)}`);
console.log(`Total a pagar: L. ${totalGeneral.toFixed(2)}`);
console.log("----------------------------");

