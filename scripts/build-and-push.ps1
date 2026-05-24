param(
    [Parameter(Mandatory = $true)]
    [string]$ProjectId,

    [Parameter(Mandatory = $false)]
    [string]$Region = "us-central1",

    [Parameter(Mandatory = $false)]
    [string]$Repository = "huanest-heritage",

    [Parameter(Mandatory = $false)]
    [string]$ImageName = "huanest-heritage-api",

    [Parameter(Mandatory = $false)]
    [string]$Tag = "latest"
)

$ErrorActionPreference = "Stop"

$registryHost = "$Region-docker.pkg.dev"
$imageUri = "$registryHost/$ProjectId/$Repository/$ImageName`:$Tag"

Write-Host "Configuring Docker auth for Artifact Registry: $registryHost"
gcloud auth configure-docker $registryHost --quiet

Write-Host "Building image: $imageUri"
docker build -t $imageUri .

Write-Host "Pushing image: $imageUri"
docker push $imageUri

Write-Host "Done. Pushed image: $imageUri"
