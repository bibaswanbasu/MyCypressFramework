Feature: End to End Ecommerce Validation

    Application Regression

    @Regression
    Scenario: Ecommerce Product Delivery
        Given I open ecommerce page
        When I add items to cart
        And Validate the total prices
        Then Select the country submitand verify Thankyou

    @Smoke
    Scenario: Filling Up The Form To Shop
        Given I open ecommerce page
        When I fill the form page
            | name  | gender |
            | Vivan | Male   |

        Then validate the form page
