function sortArray(arr){
const sorted = arr
.sort((first, second) => first.length - second.length || first.localeCompare(second));

console.log(sorted.join('\n'))
}

sortArray(['alpha',
    'beta',
    'gamma'
]);

sortArray(['Isacc',
        'Theodor',
        'Jack',
        'Harrison',
        'George'
    ]

);

sortArray(['test',
    'Deny',
    'omen',
    'Default'
]);