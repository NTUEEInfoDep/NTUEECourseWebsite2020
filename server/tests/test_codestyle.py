import io
from contextlib import redirect_stdout
import unittest

import pycodestyle

# ========================================


class TestCodeFormat(unittest.TestCase):

    def test_codeformat(self):
        """Code format checking (PEP-8)"""
        style = pycodestyle.StyleGuide(config_file='setup.cfg')

        # style checking will report errors to stdout
        # so we need to redirect io
        message = io.StringIO()
        with redirect_stdout(message):
            # Check all python files under project directory and sub-directories
            result = style.check_files(['./'])

        error_msg = f"Found {result.total_errors} errors (or warnings).\n\n"
        error_msg += "[Details]\n"
        error_msg += message.getvalue().strip()
        self.assertEqual(result.total_errors, 0, error_msg)
