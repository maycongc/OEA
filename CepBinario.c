#include <stdio.h>
#include <string.h>

typedef struct _Endereco Endereco;

struct _Endereco {
	char logradouro[72];
	char bairro[72];
	char cidade[72];
	char uf[72];
	char sigla[2];
	char cep[8];
	char lixo[2];
};

int main(int argc, char**argv) {
	FILE *f;
	Endereco e;
	long tamanhoArquivo, posicao = -1, primeiro, ultimo, meio;

	if(argc != 2)	{
		fprintf(stderr, "USO: %s [CEP]", argv[0]);
		return 1;
	}

	f = fopen("cep_ordenado.dat","r");
	fseek(f,0,SEEK_END);

	tamanhoArquivo = ftell(f);
	rewind(f); // fseek(f,0,SEEK_SET);

	primeiro = 0;
	ultimo = (tamanhoArquivo/sizeof(Endereco))-1;
	meio = (primeiro+ultimo)/2;

	do {
		posicao = ftell(f);
		fseek(f, meio * sizeof(Endereco), SEEK_SET);	
		fread(&e,sizeof(Endereco),1,f);

		if(posicao == ftell(f)){
			printf("\nCEP não encontrado.\n\n");
			break;
		}

		if(strncmp(argv[1], e.cep, 8) == 0) {
			printf("\nCEP Encontrado: \n\n%.72s\n%.72s\n%.72s\n%.72s\n%.2s\n%.8s\n\n", e.logradouro, e.bairro, e.cidade, e.uf, e.sigla, e.cep);
			break;
		} else if(strncmp(argv[1], e.cep, 8) < 0){
			ultimo = meio;
			meio = (primeiro+ultimo)/2;
		} else if(strncmp(argv[1], e.cep, 8) > 0){
			primeiro = meio;
			meio = (primeiro+ultimo)/2;
		}
	} while(ftell(f) != posicao);

	fclose(f);
	return 0;
}