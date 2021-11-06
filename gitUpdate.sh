#!/bin/bash

read -p "What changes were made? " internalMessage
read -p "Where are you pushing to? " gitPath
git add *
git commit -m "$internalMessage"
git push origin $gitBranch
