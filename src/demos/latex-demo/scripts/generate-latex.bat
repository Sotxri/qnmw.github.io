@echo off
setlocal

REM Set working directory and create output directories
cd %~dp0
mkdir ..\output\texExercises 2>nul
mkdir ..\output\texSolutions 2>nul

REM Generate individual tex files for each exercise type
java -jar ..\assets\exercisegenerator.jar -a toonescompl -x embedded -c 8  -e ..\output\texExercises\toonescompl.tex -t ..\output\texSolutions\toonescomplsol.tex
java -jar ..\assets\exercisegenerator.jar -a fromonescompl -x embedded -c 8 -e ..\output\texExercises\fromonescompl.tex -t ..\output\texSolutions\fromonescomplsol.tex
java -jar ..\assets\exercisegenerator.jar -a totwoscompl -x embedded -c 8 -e ..\output\texExercises\totwoscompl.tex -t ..\output\texSolutions\totwoscomplsol.tex
java -jar ..\assets\exercisegenerator.jar -a fromtwoscompl -x embedded -c 8 -e ..\output\texExercises\fromtwoscompl.tex -t ..\output\texSolutions\fromtwoscomplsol.tex
java -jar ..\assets\exercisegenerator.jar -a fromfloat -x embedded -c 4 -d 3 -e ..\output\texExercises\fromfloat.tex -t ..\output\texSolutions\fromfloatsol.tex
java -jar ..\assets\exercisegenerator.jar -a tofloat -x embedded -c 4 -d 3 -e ..\output\texExercises\tofloat.tex -t ..\output\texSolutions\tofloatsol.tex
java -jar ..\assets\exercisegenerator.jar -a totruthtable -x embedded -l 3 -e ..\output\texExercises\totruthtable.tex -t ..\output\texSolutions\totruthtablesol.tex
java -jar ..\assets\exercisegenerator.jar -a fromtruthtable -x embedded -l 3 -e ..\output\texExercises\fromtruthtable.tex -t ..\output\texSolutions\fromtruthtablesol.tex
java -jar ..\assets\exercisegenerator.jar -a insertionsort -x embedded -l 10 -e ..\output\texExercises\insertionsort.tex -t ..\output\texSolutions\insertionsortsol.tex
java -jar ..\assets\exercisegenerator.jar -a quicksort -x embedded -l 10 -e ..\output\texExercises\quicksort.tex -t ..\output\texSolutions\quicksortsol.tex
java -jar ..\assets\exercisegenerator.jar -a mergesortWithSplitting -x embedded -l 10 -e ..\output\texExercises\mergesortwithsplitting.tex -t ..\output\texSolutions\mergesortwithsplittingsol.tex
java -jar ..\assets\exercisegenerator.jar -a binsearchtree -x embedded -l 6 -e ..\output\texExercises\binsearchtree.tex -t ..\output\texSolutions\binsearchtreesol.tex
java -jar ..\assets\exercisegenerator.jar -a avltree -x embedded -l 6 -e ..\output\texExercises\avltree.tex -t ..\output\texSolutions\avltreesol.tex
java -jar ..\assets\exercisegenerator.jar -a bfs -x embedded -e ..\output\texExercises\bfs.tex -t ..\output\texSolutions\bfssol.tex
java -jar ..\assets\exercisegenerator.jar -a dfs -x embedded -e ..\output\texExercises\dfs.tex -t ..\output\texSolutions\dfssol.tex
java -jar ..\assets\exercisegenerator.jar -a dijkstra -x embedded -l 7 -e ..\output\texExercises\dijkstra.tex -t ..\output\texSolutions\dijkstrasol.tex
java -jar ..\assets\exercisegenerator.jar -a tohuff -x embedded -d 20 -l 30 -e ..\output\texExercises\tohuff.tex -t ..\output\texSolutions\tohuffsol.tex
java -jar ..\assets\exercisegenerator.jar -a tohamming -x embedded -l 11 -e ..\output\texExercises\tohamming.tex -t ..\output\texSolutions\tohammingsol.tex
java -jar ..\assets\exercisegenerator.jar -a fromhamming -x embedded -l 15 -e ..\output\texExercises\fromhamming.tex -t ..\output\texSolutions\fromhammingsol.tex
java -jar ..\assets\exercisegenerator.jar -a hashDivision -x embedded -l 11 -e ..\output\texExercises\hashDivision.tex -t ..\output\texSolutions\hashDivisionsol.tex
java -jar ..\assets\exercisegenerator.jar -a hashDivisionLinear -x embedded -l 11 -e ..\output\texExercises\hashDivisionLinear.tex -t ..\output\texSolutions\hashDivisionLinearsol.tex
java -jar ..\assets\exercisegenerator.jar -a hashDivisionQuadratic -x embedded -l 11 -e ..\output\texExercises\hashDivisionQuadratic.tex -t ..\output\texSolutions\hashDivisionQuadraticsol.tex
java -jar ..\assets\exercisegenerator.jar -a hashMultiplication -x embedded -l 11 -e ..\output\texExercises\hashMultiplication.tex -t ..\output\texSolutions\hashMultiplicationsol.tex
java -jar ..\assets\exercisegenerator.jar -a hashMultiplicationLinear -x embedded -l 11 -e ..\output\texExercises\hashMultiplicationLinear.tex -t ..\output\texSolutions\hashMultiplicationLinearsol.tex
java -jar ..\assets\exercisegenerator.jar -a hashMultiplicationQuadratic -x embedded -l 11 -e ..\output\texExercises\hashMultiplicationQuadratic.tex -t ..\output\texSolutions\hashMultiplicationQuadraticsol.tex

REM Copy parent tex files to output directory
copy ..\assets\Probeklausur.tex ..\output\
copy ..\assets\ProbeklausurLosung.tex ..\output\

REM Generate PDFs from parent tex files
cd ..\output
pdflatex Probeklausur.tex
pdflatex ProbeklausurLosung.tex

REM Clean up intermediate files but keep the PDFs
del *.aux *.log *.out *.toc

echo PDF Generation Complete