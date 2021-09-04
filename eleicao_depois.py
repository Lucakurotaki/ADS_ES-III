def main():
	num = num_eleitores()
	resultado(num)

def num_eleitores():
	num = int(input("Digite o número de eleitores: "))
	while not num > 0:
		num = int(input("Erro. Digite um valor positivo: "))
	
	return num


def ins_voto(i):
        print("\nEleitor ", i+1)
        voto = int(input("Digite o número do candidato: "))
        while not ((voto > 0 and voto < 4) or voto == 9):
        	voto = int(input("Opção inválida. Digite novamente: "))
        return voto

def resultado(num):
	a = 0
	b = 0
	c = 0
	nulo = 0
	branco = 0

	for i in range(0,num):
		voto = ins_voto(i)
		if voto == 1:
			a += 1
		if voto == 2:
			b += 1
		if voto == 3:
			c += 1 
		if voto == 9:
			nulo += 1
		if voto == 0:
			branco += 1

	vencedor = eleito(a,b,c)

	print(f"\nTodal de votos para o candidato A: {a}"
          f"\nTotal de votos para o candidato B: {b}"
          f"\nTodal de votos para o candidato C: {c}"
          f"\nTodal de votos nulos: {nulo}"
          f"\nTodal de votos brancos: {branco}"
          f"\nO vencedor da eleição: {vencedor}")


def eleito(a,b,c):
	if (a == b and a > c) or (a == c and a > b) or (b == c and b > a) or (a == b and b == c) :
		return "Não há vencedor"

	if a > b and a > c:
		return 'A'

	if b > a and b > c:
		return 'B'

	return 'C' 

main()