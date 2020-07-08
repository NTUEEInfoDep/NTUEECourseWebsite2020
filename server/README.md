# Server side

## Code Formatting

為了之後的人好維護，使用了以下的工具做 Code formatting，請後續維護者記得要繼續使用這些工具。

- [autopep8](https://github.com/hhatto/autopep8)
- [pycodestyle](https://github.com/PyCQA/pycodestyle)
- [editorconfig](https://editorconfig.org/)

相關的設定檔為以下幾個檔案

- `setup.cfg`
- `.editorconfig`

## Code Testing

```sh
python -m unittest discover
```

## Directory Structure

    .
    ├── tests/               - testcases
    ├── requirements.txt     - 用到的python modules
    ├── setup.cfg            - pycodestyle 的設定檔
    └── .editorconfig        - editorconfig 的設定檔

## Usage

1. Prerequisites

```sh
pip install -r requirements.txt
```

```sh

```

## API

## 串接前端

## 特殊規則
