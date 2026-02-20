const nombres=["juan","pedro","elizabet","carina","luis",
               "ricardo","roberto","marina","graciela"];

console.log("nombres como arreglo: " ,nombres.filter(n => n.length > 5))

console.log("nombres como lista : " + nombres.filter(n => n.length >= 5).join(", "))