# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin "flowbite", to: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.1.1/flowbite.turbo.min.js"
pin "typed.js", to: "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin_all_from "app/components"
