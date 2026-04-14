# `catalogIntegrationAwsGlue` Submodule <a name="`catalogIntegrationAwsGlue` Submodule" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CatalogIntegrationAwsGlue <a name="CatalogIntegrationAwsGlue" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue snowflake_catalog_integration_aws_glue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationawsglue"

catalogintegrationawsglue.NewCatalogIntegrationAwsGlue(scope Construct, id *string, config CatalogIntegrationAwsGlueConfig) CatalogIntegrationAwsGlue
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig">CatalogIntegrationAwsGlueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig">CatalogIntegrationAwsGlueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetCatalogNamespace">ResetCatalogNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetGlueRegion">ResetGlueRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetRefreshIntervalSeconds">ResetRefreshIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.putTimeouts"></a>

```go
func PutTimeouts(value CatalogIntegrationAwsGlueTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts">CatalogIntegrationAwsGlueTimeouts</a>

---

##### `ResetCatalogNamespace` <a name="ResetCatalogNamespace" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetCatalogNamespace"></a>

```go
func ResetCatalogNamespace()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetComment"></a>

```go
func ResetComment()
```

##### `ResetGlueRegion` <a name="ResetGlueRegion" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetGlueRegion"></a>

```go
func ResetGlueRegion()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetId"></a>

```go
func ResetId()
```

##### `ResetRefreshIntervalSeconds` <a name="ResetRefreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetRefreshIntervalSeconds"></a>

```go
func ResetRefreshIntervalSeconds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CatalogIntegrationAwsGlue resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationawsglue"

catalogintegrationawsglue.CatalogIntegrationAwsGlue_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationawsglue"

catalogintegrationawsglue.CatalogIntegrationAwsGlue_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationawsglue"

catalogintegrationawsglue.CatalogIntegrationAwsGlue_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationawsglue"

catalogintegrationawsglue.CatalogIntegrationAwsGlue_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CatalogIntegrationAwsGlue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CatalogIntegrationAwsGlue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CatalogIntegrationAwsGlue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CatalogIntegrationAwsGlue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList">CatalogIntegrationAwsGlueDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList">CatalogIntegrationAwsGlueShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference">CatalogIntegrationAwsGlueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.catalogNamespaceInput">CatalogNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueAwsRoleArnInput">GlueAwsRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueCatalogIdInput">GlueCatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueRegionInput">GlueRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.refreshIntervalSecondsInput">RefreshIntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.catalogNamespace">CatalogNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueAwsRoleArn">GlueAwsRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueCatalogId">GlueCatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueRegion">GlueRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.refreshIntervalSeconds">RefreshIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.describeOutput"></a>

```go
func DescribeOutput() CatalogIntegrationAwsGlueDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList">CatalogIntegrationAwsGlueDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.showOutput"></a>

```go
func ShowOutput() CatalogIntegrationAwsGlueShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList">CatalogIntegrationAwsGlueShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.timeouts"></a>

```go
func Timeouts() CatalogIntegrationAwsGlueTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference">CatalogIntegrationAwsGlueTimeoutsOutputReference</a>

---

##### `CatalogNamespaceInput`<sup>Optional</sup> <a name="CatalogNamespaceInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.catalogNamespaceInput"></a>

```go
func CatalogNamespaceInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GlueAwsRoleArnInput`<sup>Optional</sup> <a name="GlueAwsRoleArnInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueAwsRoleArnInput"></a>

```go
func GlueAwsRoleArnInput() *string
```

- *Type:* *string

---

##### `GlueCatalogIdInput`<sup>Optional</sup> <a name="GlueCatalogIdInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueCatalogIdInput"></a>

```go
func GlueCatalogIdInput() *string
```

- *Type:* *string

---

##### `GlueRegionInput`<sup>Optional</sup> <a name="GlueRegionInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueRegionInput"></a>

```go
func GlueRegionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RefreshIntervalSecondsInput`<sup>Optional</sup> <a name="RefreshIntervalSecondsInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.refreshIntervalSecondsInput"></a>

```go
func RefreshIntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CatalogNamespace`<sup>Required</sup> <a name="CatalogNamespace" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.catalogNamespace"></a>

```go
func CatalogNamespace() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `GlueAwsRoleArn`<sup>Required</sup> <a name="GlueAwsRoleArn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueAwsRoleArn"></a>

```go
func GlueAwsRoleArn() *string
```

- *Type:* *string

---

##### `GlueCatalogId`<sup>Required</sup> <a name="GlueCatalogId" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueCatalogId"></a>

```go
func GlueCatalogId() *string
```

- *Type:* *string

---

##### `GlueRegion`<sup>Required</sup> <a name="GlueRegion" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueRegion"></a>

```go
func GlueRegion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RefreshIntervalSeconds`<sup>Required</sup> <a name="RefreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.refreshIntervalSeconds"></a>

```go
func RefreshIntervalSeconds() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CatalogIntegrationAwsGlueConfig <a name="CatalogIntegrationAwsGlueConfig" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationawsglue"

&catalogintegrationawsglue.CatalogIntegrationAwsGlueConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Enabled: interface{},
	GlueAwsRoleArn: *string,
	GlueCatalogId: *string,
	Name: *string,
	CatalogNamespace: *string,
	Comment: *string,
	GlueRegion: *string,
	Id: *string,
	RefreshIntervalSeconds: *f64,
	Timeouts: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specifies whether the catalog integration is available for use for Iceberg tables. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.glueAwsRoleArn">GlueAwsRoleArn</a></code> | <code>*string</code> | Specifies the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to assume. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.glueCatalogId">GlueCatalogId</a></code> | <code>*string</code> | Specifies the ID of your AWS account. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.catalogNamespace">CatalogNamespace</a></code> | <code>*string</code> | Specifies the default AWS Glue Data Catalog namespace for all Iceberg tables that you associate with the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.comment">Comment</a></code> | <code>*string</code> | (Default: ``) Specifies a comment for the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.glueRegion">GlueRegion</a></code> | <code>*string</code> | Specifies the AWS region of your AWS Glue Data Catalog. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#id CatalogIntegrationAwsGlue#id}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.refreshIntervalSeconds">RefreshIntervalSeconds</a></code> | <code>*f64</code> | Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts">CatalogIntegrationAwsGlueTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specifies whether the catalog integration is available for use for Iceberg tables.

`true` allows users to create new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration function normally. `false` prevents users from creating new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration cannot access the catalog in the table definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#enabled CatalogIntegrationAwsGlue#enabled}

---

##### `GlueAwsRoleArn`<sup>Required</sup> <a name="GlueAwsRoleArn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.glueAwsRoleArn"></a>

```go
GlueAwsRoleArn *string
```

- *Type:* *string

Specifies the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#glue_aws_role_arn CatalogIntegrationAwsGlue#glue_aws_role_arn}

---

##### `GlueCatalogId`<sup>Required</sup> <a name="GlueCatalogId" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.glueCatalogId"></a>

```go
GlueCatalogId *string
```

- *Type:* *string

Specifies the ID of your AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#glue_catalog_id CatalogIntegrationAwsGlue#glue_catalog_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#name CatalogIntegrationAwsGlue#name}

---

##### `CatalogNamespace`<sup>Optional</sup> <a name="CatalogNamespace" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.catalogNamespace"></a>

```go
CatalogNamespace *string
```

- *Type:* *string

Specifies the default AWS Glue Data Catalog namespace for all Iceberg tables that you associate with the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#catalog_namespace CatalogIntegrationAwsGlue#catalog_namespace}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

(Default: ``) Specifies a comment for the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#comment CatalogIntegrationAwsGlue#comment}

---

##### `GlueRegion`<sup>Optional</sup> <a name="GlueRegion" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.glueRegion"></a>

```go
GlueRegion *string
```

- *Type:* *string

Specifies the AWS region of your AWS Glue Data Catalog.

You must specify a value for this attribute if your Snowflake account is not hosted on AWS. Otherwise, the default region is the Snowflake deployment region for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#glue_region CatalogIntegrationAwsGlue#glue_region}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#id CatalogIntegrationAwsGlue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RefreshIntervalSeconds`<sup>Optional</sup> <a name="RefreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.refreshIntervalSeconds"></a>

```go
RefreshIntervalSeconds *f64
```

- *Type:* *f64

Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh.

For Delta-based tables, specifies the number of seconds to wait between attempts to poll your external cloud storage for new metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#refresh_interval_seconds CatalogIntegrationAwsGlue#refresh_interval_seconds}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.timeouts"></a>

```go
Timeouts CatalogIntegrationAwsGlueTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts">CatalogIntegrationAwsGlueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#timeouts CatalogIntegrationAwsGlue#timeouts}

---

### CatalogIntegrationAwsGlueDescribeOutput <a name="CatalogIntegrationAwsGlueDescribeOutput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationawsglue"

&catalogintegrationawsglue.CatalogIntegrationAwsGlueDescribeOutput {

}
```


### CatalogIntegrationAwsGlueShowOutput <a name="CatalogIntegrationAwsGlueShowOutput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationawsglue"

&catalogintegrationawsglue.CatalogIntegrationAwsGlueShowOutput {

}
```


### CatalogIntegrationAwsGlueTimeouts <a name="CatalogIntegrationAwsGlueTimeouts" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationawsglue"

&catalogintegrationawsglue.CatalogIntegrationAwsGlueTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#create CatalogIntegrationAwsGlue#create}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#delete CatalogIntegrationAwsGlue#delete}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#read CatalogIntegrationAwsGlue#read}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#update CatalogIntegrationAwsGlue#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#create CatalogIntegrationAwsGlue#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#delete CatalogIntegrationAwsGlue#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#read CatalogIntegrationAwsGlue#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#update CatalogIntegrationAwsGlue#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CatalogIntegrationAwsGlueDescribeOutputList <a name="CatalogIntegrationAwsGlueDescribeOutputList" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationawsglue"

catalogintegrationawsglue.NewCatalogIntegrationAwsGlueDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CatalogIntegrationAwsGlueDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.get"></a>

```go
func Get(index *f64) CatalogIntegrationAwsGlueDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CatalogIntegrationAwsGlueDescribeOutputOutputReference <a name="CatalogIntegrationAwsGlueDescribeOutputOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationawsglue"

catalogintegrationawsglue.NewCatalogIntegrationAwsGlueDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CatalogIntegrationAwsGlueDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.catalogNamespace">CatalogNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.catalogSource">CatalogSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.glueAwsRoleArn">GlueAwsRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.glueCatalogId">GlueCatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.glueRegion">GlueRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.refreshIntervalSeconds">RefreshIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.tableFormat">TableFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutput">CatalogIntegrationAwsGlueDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogNamespace`<sup>Required</sup> <a name="CatalogNamespace" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.catalogNamespace"></a>

```go
func CatalogNamespace() *string
```

- *Type:* *string

---

##### `CatalogSource`<sup>Required</sup> <a name="CatalogSource" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.catalogSource"></a>

```go
func CatalogSource() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `GlueAwsRoleArn`<sup>Required</sup> <a name="GlueAwsRoleArn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.glueAwsRoleArn"></a>

```go
func GlueAwsRoleArn() *string
```

- *Type:* *string

---

##### `GlueCatalogId`<sup>Required</sup> <a name="GlueCatalogId" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.glueCatalogId"></a>

```go
func GlueCatalogId() *string
```

- *Type:* *string

---

##### `GlueRegion`<sup>Required</sup> <a name="GlueRegion" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.glueRegion"></a>

```go
func GlueRegion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RefreshIntervalSeconds`<sup>Required</sup> <a name="RefreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.refreshIntervalSeconds"></a>

```go
func RefreshIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `TableFormat`<sup>Required</sup> <a name="TableFormat" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.tableFormat"></a>

```go
func TableFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() CatalogIntegrationAwsGlueDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutput">CatalogIntegrationAwsGlueDescribeOutput</a>

---


### CatalogIntegrationAwsGlueShowOutputList <a name="CatalogIntegrationAwsGlueShowOutputList" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationawsglue"

catalogintegrationawsglue.NewCatalogIntegrationAwsGlueShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CatalogIntegrationAwsGlueShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.get"></a>

```go
func Get(index *f64) CatalogIntegrationAwsGlueShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CatalogIntegrationAwsGlueShowOutputOutputReference <a name="CatalogIntegrationAwsGlueShowOutputOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationawsglue"

catalogintegrationawsglue.NewCatalogIntegrationAwsGlueShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CatalogIntegrationAwsGlueShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutput">CatalogIntegrationAwsGlueShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() CatalogIntegrationAwsGlueShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutput">CatalogIntegrationAwsGlueShowOutput</a>

---


### CatalogIntegrationAwsGlueTimeoutsOutputReference <a name="CatalogIntegrationAwsGlueTimeoutsOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationawsglue"

catalogintegrationawsglue.NewCatalogIntegrationAwsGlueTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CatalogIntegrationAwsGlueTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



