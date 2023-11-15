import java.util.Scanner;

public class Buclefor {
    public static void main(String[] args) throws Exception {
        Scanner Imprimir = new Scanner (System.in);
        int valor=0,contador,subtotal,acumulador=0;


     
        for (int x=1; x<=5; x++) {
        System.out.println("Digite el precio del  producto");
        
      int precio=Imprimir.nextInt();
        
        System.out.println("Digite la cantidad de  producto");
        
        int cantida=Imprimir.nextInt();
    
        subtotal=precio*cantida;
       
        System.out.println("subtotal  :"+ subtotal);
        System.out.println("total  :   "+ (++subtotal   );





        }

    }}




/* 

subtotal  y total valor del pago y valor cambio   contar con telefonia exito para recibir los minutos
    contador=contador+1
subtotal=precio*producto
    acumulador=acumulador+subtotal
*/