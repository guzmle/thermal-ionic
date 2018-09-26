import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import * as printer from 'thermal-printer-buffer';

declare var Socket;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  testBuffer() {

    printer.init({
      type: printer.printerTypes.EPSON,
      interface: 'tcp://192.168.100.250:9100',
      width: 42,                         // Number of characters in one line (default 48)
    });

    printer.alignCenter();
    printer.println("------------------------------------------");
    printer.alignCenter();
    printer.println("R.U.T. : XX.XXX.XXX-X");
    printer.alignCenter();
    printer.println("FACTURA ELECTRONICA");
    printer.alignCenter();
    printer.println("Nro. {factura}");
    printer.alignCenter();
    printer.println("------------------------------------------");
    printer.alignCenter();
    printer.println("S.I.I Santiago Oriente");
    printer.newLine();
    printer.alignCenter();
    printer.printImage('./olaii-logo-black.png', (done) => {
      console.log("Print done image", printer.getBuffer());
      printer.alignCenter();
      printer.println("-----------------------------------------");
      printer.alignLeft();
      printer.println("Evaluanos: www.laperladelpacifico.cl/opina");
      printer.alignLeft();
      printer.println("{ENTIDAD EMISORA}");
      printer.alignLeft();
      printer.println("{DIRECCION}");
      printer.tableCustom([                               // Prints table with custom settings (text, align, width, bold)
        {text: "{comuna}", align: "LEFT", width: 0.25},
        {text: "{ciudad}", align: "CENTER", width: 0.25},
        {text: "{Pais}", align: "RIGHT", width: 0.25}
      ]);
      printer.alignLeft();
      printer.println("{giro}");
      printer.alignLeft();
      printer.println("Teléfono: {phone}");
      printer.alignLeft();
      printer.println("Correo: {email}");
      printer.alignLeft();
      printer.println("Código Postal: {email}");
      printer.alignLeft();
      printer.println("Nro Caja: {######}");
      printer.alignLeft();
      printer.println("Fecha:{DD/MM/AAAA} - Hora:{HH:MM:SS}");
      printer.alignCenter();
      printer.println("-----------------------------------------");
      printer.alignLeft();
      printer.println("Nombre: {name}");
      printer.alignCenter();
      printer.alignLeft("RUT: {rut}");
      printer.alignLeft();
      printer.println("Giro: {Giro}");
      printer.alignLeft();
      printer.println("Dirección: {address}");
      printer.alignLeft();
      printer.println("Comuna: {comuna}");
      printer.alignLeft();
      printer.println("Ciudad: {city}");
      printer.alignCenter();
      printer.println("-----------------------------------------");
      printer.newLine();
      printer.alignCenter();
      printer.println("-----------------------------------------");
      printer.tableCustom([                               // Prints table with custom settings (text, align, width, bold)
        {text: "Cant.", align: "LEFT", width: 0.15, bold: true},
        {text: "Detalle", align: "LEFT", width: 0.40, bold: true},
        {text: "Precio", align: "LEFT", width: 0.20, bold: true},
        {text: "Total", align: "RIGHT", width: 0.15, bold: true}
      ]);
      printer.alignCenter();
      printer.println("-----------------------------------------");
      printer.tableCustom([                               // Prints table with custom settings (text, align, width, bold)
        {text: "100", align: "LEFT", width: 0.10},
        {text: "MACHAS A LA PARMESANA", align: "LEFT", width: 0.40},
        {text: "11009000", align: "LEFT", width: 0.20},
        {text: "10000000", align: "RIGHT", width: 0.20}
      ]);
      printer.alignCenter();
      printer.println("-----------------------------------------");
      printer.alignLeft();
      printer.tableCustom([                               // Prints table with custom settings (text, align, width, bold)
        {text: "SUBTOTAL", align: "LEFT", width: 0.40},
        {text: "{10000000}", align: "RIGHT", width: 0.50},
      ]);
      printer.alignCenter();
      printer.println("------------------------------------------");
      printer.alignLeft();
      printer.tableCustom([                               // Prints table with custom settings (text, align, width, bold)
        {text: "TOTAL AFECTO", align: "LEFT", width: 0.40, bold: true},
        {text: "{10000000}", align: "RIGHT", width: 0.50, bold: true},
      ]);
      printer.alignLeft();
      printer.tableCustom([                               // Prints table with custom settings (text, align, width, bold)
        {text: "TOTAL EXENTO", align: "LEFT", width: 0.40, bold: true},
        {text: "{10000000}", align: "RIGHT", width: 0.50, bold: true},
      ]);
      printer.tableCustom([                               // Prints table with custom settings (text, align, width, bold)
        {text: "TOTAL IVA (19%)", align: "LEFT", width: 0.40, bold: true},
        {text: "{10000000}", align: "RIGHT", width: 0.50, bold: true},
      ]);
      printer.alignLeft();
      printer.tableCustom([                               // Prints table with custom settings (text, align, width, bold)
        {text: "TOTAL", align: "LEFT", width: 0.40, bold: true},
        {text: "{10000000}", align: "RIGHT", width: 0.50, bold: true},
      ]);
      printer.alignCenter();
      printer.println("-----------------------------------------");
      printer.alignLeft();
      printer.tableCustom([                               // Prints table with custom settings (text, align, width, bold)
        {text: "Suma de sus Pagos", align: "LEFT", width: 0.60},
        {text: "{Pagos}", align: "RIGHT", width: 0.30},
      ]);
      printer.tableCustom([                               // Prints table with custom settings (text, align, width, bold)
        {text: "Su Vuelto", align: "LEFT", width: 0.60},
        {text: "{Vuelto}", align: "RIGHT", width: 0.30},
      ]);
      printer.alignLeft();
      printer.println("**Propina Sugerida (10%)**    {total*.10}");
      printer.alignLeft();
      printer.println("**Total c/Prop Sugerida**    {total*1.10}");
      printer.table(["CHKFX {#######}", "MESA {##########}",]);
      printer.alignLeft();
      printer.println("Nombre: _________________________________");
      printer.alignLeft();
      printer.println("RUT: ______________ Fecha: ______________");
      printer.alignLeft();
      printer.println("Firma: __________________________________");
      printer.newLine();
      printer.alignCenter();
      //const xml = '<TED version="1.0"><DD><RE>76484902-7</RE><TD>34</TD><F>166</F><FE>2018-09-24</FE><RR>11111111-1</RR><RSR>Nombre Receptor</RSR><MNT>100</MNT><IT1>Primer detalle</IT1><CAF version="1.0"><DA><RE>76484902-7</RE><RS>SHAREABLE INNOVATIONS SPA</RS><TD>34</TD><RNG><D>164</D><H>213</H></RNG><FA>2018-05-02</FA><RSAPK><M>xEgzQHlbuDyVQ/o2en9fyXZ5CbOhCfeWngsGoiURilsMrTDJYxzVEyYycnaOYn9xe7PueENj8GkxYxM2TxOERQ==</M><E>Aw==</E></RSAPK><IDK>300</IDK></DA><FRMA algoritmo="SHA1withRSA">em1SxWkeCDql+jX35oruOy1MfBWT60fEBaJ2Cc0yNI0aysy437B6kXOfXDN51TZZJ1cZPSsWdprnLYmEbeZ6Bw==</FRMA></CAF><TSTED>2018-09-24T00:51:02</TSTED></DD><FRMT algoritmo="SHA1withRSA">uDNJNlohWaJ2qKGp7Eo4/V3zu+Y3KnGNvBwKX+FNojlDApDAyiPne2P44M78EOLSrv6El/78ZKPBGFgXDS09eQ==</FRMT></TED>';


      //MANDO A LA IMPRESORA
      var socket = new Socket();
      socket.open(
        "127.0.0.1",
        1234,
        function() {
          // invoked after successful opening of socket
          socket.write(printer.getBuffer());
          socket.shutdownWrite();

        },
        function(errorMessage) {
          // invoked after unsuccessful opening of socket
        });
    })
  }
}
