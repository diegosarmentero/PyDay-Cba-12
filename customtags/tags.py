from google.appengine.ext import webapp
import os

register = webapp.template.create_template_register()

def active(pattern):
    import re
    path = os.environ['PATH_INFO']
    if re.search(pattern, path):
        return 'active'
    return ''

register.simple_tag(active)
