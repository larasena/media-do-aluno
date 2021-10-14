function calcular() {
    let nome = window.prompt('Qual é o seu nome?');
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`));
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a segunda nota de ${nome}?`));
    media = (n1 + n2) / 2;

    let res = document.getElementById('resultado');
    res.innerHTML = `Calculando a média de ${nome};<br>`;
    res.innerHTML += `As notas de ${nome} foram ${n1} e ${n2};<br>`;
    res.innerHTML += `A média de ${nome} é igual a ${media}!<br>`;

    if(media > 6) {
        res.innerHTML += 'Meus parabéns!!!';
    } else {
        res.innerHTML += 'Precisa estudar mais.';
    }
}