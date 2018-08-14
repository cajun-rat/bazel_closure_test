from weasyprint import HTML, CSS
from sys import argv
from argparse import ArgumentParser

if __name__ == "__main__":
    parser = ArgumentParser(description="Generate PDF using Weasyprint")
    parser.add_argument('-o', metavar="dest.pdf",  help="Output file")
    parser.add_argument('--css', help="CSS style sheet")
    parser.add_argument('--html', help="HTML5 content")
    args = parser.parse_args()
    html = HTML(args.html)
    css = CSS(filename=args.css)
    html.write_pdf(args.o, stylesheets=[css])

