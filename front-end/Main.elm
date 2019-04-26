module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Browser exposing (..)
import List

{- Functions -}
politely : String -> String
politely phrase =
  "Excuse me, " ++ phrase

ask : String -> String -> String
ask thing place =
  "is there a "
  ++ thing
  ++ " in the "
  ++ place
  ++ " ?"

askPolitelyAboutFish : String -> String
askPolitelyAboutFish = politely << (ask "fish")

{- k/v pairs -}
type alias Dog =
  { name : String
  , age : Int
  }
dog =
  { name = "Spock"
  ,  age = 3
  }

renderDog : Dog -> String
renderDog dogvar =
  dogvar.name ++ ", " ++ (String.fromInt dogvar.age)

{- Lists -}
type alias Person =
  { name : String
  , age : Int
  }
people =
  [ { name = "Legolas", age = 2931 }
  , { name = "Gimli", age = 139 }
  ]

names : List Person -> List String
names peeps =
  List.map (\peep -> peep.name) peeps
  -- (\peep -> peep.name) = fonction anonime avec -> qui définit le body

findPerson : String -> List Person -> Maybe Person
findPerson name peeps =
  List.foldl
    (\peep memo ->
      case memo of
        Just _ ->
          memo
        Nothing ->
          if peep.name == name then
            Just peep
          else
            Nothing
    )
    Nothing
    peeps

{- Render HTML -}
type alias Ship =
  { name : String
  , model : String
  , cost : Int
  }

ships =
  [ { name = "X-wing", cost = 149999 }
  , { name = "Millenium Falcon", cost = 100000 }
  , { name = "Death Star", cost = 1000000000 }
  ]

renderShip ship =
  li [] [ text ship.name
        , text ", "
        , b [] [ text <| String.fromInt ship.cost ]
        ]

renderShips shipsvar =
  div
    [ style "font-family" "sans-serif"
    , style "padding" "1em"
    ]
    [ h1 [] [text "Ships"]
    , ul [] (List.map renderShip shipsvar)
    ]

{- Reusability -}
numbers =
  [ 1, 2, 3, 4, 5 ]

printThing : thing -> Html msg
printThing thingy =
  ul [] [ text <| Debug.toString thingy ]

fruits =
  [ { name = "Orange" }, { name = "Banana" } ]

{- Elm Architecture -}
-- Four Parts
model =
  { showFace = False }

type Msg =
  ShowFace

update msg model_ =
  case msg of
    ShowFace -> { model_ | showFace = True }

view model_ =
  div []
      [ h1 [] [ text "Face gen" ]
      , button [onClick ShowFace] [ text "Face me" ]
      , if model_.showFace then
          text ":)"
        else
          text ""
      ]

main =
  -- text <| askPolitelyAboutFish "hat"
  -- <| politely
  -- <| ask "fish" "sea"

  -- text <| dog.name
  -- text <| renderDog dog
  -- text <| Debug.toString <| names people
  -- text <| Debug.toString <| findPerson "Legolas" people
  -- ul [] (List.map printThing numbers)
  -- ul [] (List.map printThing fruits)
  Browser.sandbox
    { init = model
    , update = update
    , view = view
    }