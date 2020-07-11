const initialState = {
    session: {
        isLogin: false,
        sessionID: '',
        studentID: ''
    },
    course: [{
            name: '電子學',
            courseID: '86103',
            grade: 2
        }, {
            name: '演算法',
            courseID: '86104',
            grade: 3
        }, {
            name: '電子學實驗',
            courseID: '86106',
            grade: 2
        },
        {
            name: '幾桶',
            courseID: '86100',
            grade: 2
        }, {
            name: '光電實驗',
            courseID: '8610324',
            grade: 4
        }, {
            name: '電路學實驗',
            courseID: '862',
            grade: 1
        }
    ],
    selection: {
        name: '電子學',
        selected: [{
                content: '鍾爸',
                order: 1
            },
            {
                content: '呂帥',
                order: 2
            }
        ],
        unselected: [{
            content: '子程',
            order: 0
        }],
    }
};

export default initialState