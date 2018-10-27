

//INSTRUCTIUNE VIDA ( ORICE INSTRUCTIUNE SE TERMINA CU ;)
;

//INSTRUCTIUNE EXPRESIE/SIMPLA
expresie;
cin >> a; //intructiune de citire in variabila a
cout << "Mesaj"; //instructiunea de scriere
var = 1; //instructiune de atribuire
var += 2; //instructiune de atribuire (forma lunga var = var + 2;)
citireDate(param); //apel de functie (functie poate fi vazuta ca o comanda data de program)
v++; //Instructiune de incrementare
++v; //Instructiune de incrementare
--v; //Instructiune de decrementare
v--; //Instructiune de decrementare

//INSTRUCTIUNEA COMPUSA
{
	declarari_variabile;
	instr1;
	instr2;
	//...
}

//INSTRUCTIUNEA IF
if(conditie) 
	instructiune1;
else //optional
	instructiune2; 

//INSTRUCTIUNEA SWITCH
switch(expresie){
	case val1: 
		instr1; 
		break;
	case val1: 
		instr2; 
		break;
	//...
	case valn: 
		instrn; 
		break;
	default: instr; //optional
}

//INSTRUCTIUNEA WHILE
while(conditie)
	instr;
	
//INSTRUCTIUNE DO WHILE
do {
	instr;
} while(conditie);

//INSTRUCTIUNEA FOR
for(intializare; conditie; reintializare)
	instr;
	
//Exemplu la for
for(int i = 0; i < 10; i++)
	cout << i << " ";
	
