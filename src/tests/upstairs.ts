export = {}

const upstairs = (n: number) => {
    let matrix: string[][] = [];

    for(let i = 0; i < n; i++) {
        matrix.push([])

        for(let j = 0; j < n - i; j++) {
            matrix[i].push('#')
        }
    }

    for(let i = n - 1; i >= 0; i--) {
        let step = ''

        for(let j = n - 1; j >= 0; j--) {
            if(matrix[i][j] == undefined) {
                step += " ";
            } else {
                step += "#";
            }
        }

        console.log(step)
    }
}

upstairs(31)
