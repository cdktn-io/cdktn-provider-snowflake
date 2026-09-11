# `dataSnowflakeOpenflowDeployments` Submodule <a name="`dataSnowflakeOpenflowDeployments` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeOpenflowDeployments <a name="DataSnowflakeOpenflowDeployments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments snowflake_openflow_deployments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowdeployments"

datasnowflakeopenflowdeployments.NewDataSnowflakeOpenflowDeployments(scope Construct, id *string, config DataSnowflakeOpenflowDeploymentsConfig) DataSnowflakeOpenflowDeployments
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig">DataSnowflakeOpenflowDeploymentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig">DataSnowflakeOpenflowDeploymentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.putLimit">PutLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetLike">ResetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetStartsWith">ResetStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetWithDescribe">ResetWithDescribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetWithParameters">ResetWithParameters</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutLimit` <a name="PutLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.putLimit"></a>

```go
func PutLimit(value DataSnowflakeOpenflowDeploymentsLimit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetId"></a>

```go
func ResetId()
```

##### `ResetLike` <a name="ResetLike" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetLike"></a>

```go
func ResetLike()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetLimit"></a>

```go
func ResetLimit()
```

##### `ResetStartsWith` <a name="ResetStartsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetStartsWith"></a>

```go
func ResetStartsWith()
```

##### `ResetWithDescribe` <a name="ResetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetWithDescribe"></a>

```go
func ResetWithDescribe()
```

##### `ResetWithParameters` <a name="ResetWithParameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetWithParameters"></a>

```go
func ResetWithParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeOpenflowDeployments resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowdeployments"

datasnowflakeopenflowdeployments.DataSnowflakeOpenflowDeployments_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowdeployments"

datasnowflakeopenflowdeployments.DataSnowflakeOpenflowDeployments_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowdeployments"

datasnowflakeopenflowdeployments.DataSnowflakeOpenflowDeployments_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowdeployments"

datasnowflakeopenflowdeployments.DataSnowflakeOpenflowDeployments_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataSnowflakeOpenflowDeployments resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSnowflakeOpenflowDeployments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSnowflakeOpenflowDeployments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeOpenflowDeployments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.limit">Limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference">DataSnowflakeOpenflowDeploymentsLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.openflowDeployments">OpenflowDeployments</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.likeInput">LikeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.limitInput">LimitInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.startsWithInput">StartsWithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withDescribeInput">WithDescribeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withParametersInput">WithParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.like">Like</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.startsWith">StartsWith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withDescribe">WithDescribe</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withParameters">WithParameters</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.limit"></a>

```go
func Limit() DataSnowflakeOpenflowDeploymentsLimitOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference">DataSnowflakeOpenflowDeploymentsLimitOutputReference</a>

---

##### `OpenflowDeployments`<sup>Required</sup> <a name="OpenflowDeployments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.openflowDeployments"></a>

```go
func OpenflowDeployments() DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.likeInput"></a>

```go
func LikeInput() *string
```

- *Type:* *string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.limitInput"></a>

```go
func LimitInput() DataSnowflakeOpenflowDeploymentsLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a>

---

##### `StartsWithInput`<sup>Optional</sup> <a name="StartsWithInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.startsWithInput"></a>

```go
func StartsWithInput() *string
```

- *Type:* *string

---

##### `WithDescribeInput`<sup>Optional</sup> <a name="WithDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withDescribeInput"></a>

```go
func WithDescribeInput() interface{}
```

- *Type:* interface{}

---

##### `WithParametersInput`<sup>Optional</sup> <a name="WithParametersInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withParametersInput"></a>

```go
func WithParametersInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.like"></a>

```go
func Like() *string
```

- *Type:* *string

---

##### `StartsWith`<sup>Required</sup> <a name="StartsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.startsWith"></a>

```go
func StartsWith() *string
```

- *Type:* *string

---

##### `WithDescribe`<sup>Required</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withDescribe"></a>

```go
func WithDescribe() interface{}
```

- *Type:* interface{}

---

##### `WithParameters`<sup>Required</sup> <a name="WithParameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withParameters"></a>

```go
func WithParameters() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeOpenflowDeploymentsConfig <a name="DataSnowflakeOpenflowDeploymentsConfig" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowdeployments"

&datasnowflakeopenflowdeployments.DataSnowflakeOpenflowDeploymentsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Like: *string,
	Limit: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit,
	StartsWith: *string,
	WithDescribe: interface{},
	WithParameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#id DataSnowflakeOpenflowDeployments#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.like">Like</a></code> | <code>*string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.limit">Limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.startsWith">StartsWith</a></code> | <code>*string</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.withDescribe">WithDescribe</a></code> | <code>interface{}</code> | (Default: `true`) Runs DESC OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.withParameters">WithParameters</a></code> | <code>interface{}</code> | (Default: `true`) Runs SHOW PARAMETERS IN OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#id DataSnowflakeOpenflowDeployments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.like"></a>

```go
Like *string
```

- *Type:* *string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#like DataSnowflakeOpenflowDeployments#like}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.limit"></a>

```go
Limit DataSnowflakeOpenflowDeploymentsLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#limit DataSnowflakeOpenflowDeployments#limit}

---

##### `StartsWith`<sup>Optional</sup> <a name="StartsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.startsWith"></a>

```go
StartsWith *string
```

- *Type:* *string

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#starts_with DataSnowflakeOpenflowDeployments#starts_with}

---

##### `WithDescribe`<sup>Optional</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.withDescribe"></a>

```go
WithDescribe interface{}
```

- *Type:* interface{}

(Default: `true`) Runs DESC OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#with_describe DataSnowflakeOpenflowDeployments#with_describe}

---

##### `WithParameters`<sup>Optional</sup> <a name="WithParameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.withParameters"></a>

```go
WithParameters interface{}
```

- *Type:* interface{}

(Default: `true`) Runs SHOW PARAMETERS IN OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS.

The output is saved to the parameters field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#with_parameters DataSnowflakeOpenflowDeployments#with_parameters}

---

### DataSnowflakeOpenflowDeploymentsLimit <a name="DataSnowflakeOpenflowDeploymentsLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowdeployments"

&datasnowflakeopenflowdeployments.DataSnowflakeOpenflowDeploymentsLimit {
	Rows: *f64,
	From: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit.property.rows">Rows</a></code> | <code>*f64</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit.property.from">From</a></code> | <code>*string</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit.property.rows"></a>

```go
Rows *f64
```

- *Type:* *f64

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#rows DataSnowflakeOpenflowDeployments#rows}

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit.property.from"></a>

```go
From *string
```

- *Type:* *string

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#from DataSnowflakeOpenflowDeployments#from}

---

### DataSnowflakeOpenflowDeploymentsOpenflowDeployments <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeployments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeployments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeployments.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowdeployments"

&datasnowflakeopenflowdeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeployments {

}
```


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowdeployments"

&datasnowflakeopenflowdeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput {

}
```


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowdeployments"

&datasnowflakeopenflowdeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters {

}
```


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowdeployments"

&datasnowflakeopenflowdeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable {

}
```


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowdeployments"

&datasnowflakeopenflowdeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeOpenflowDeploymentsLimitOutputReference <a name="DataSnowflakeOpenflowDeploymentsLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowdeployments"

datasnowflakeopenflowdeployments.NewDataSnowflakeOpenflowDeploymentsLimitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSnowflakeOpenflowDeploymentsLimitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.resetFrom"></a>

```go
func ResetFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.rowsInput">RowsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.rows">Rows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `RowsInput`<sup>Optional</sup> <a name="RowsInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.rowsInput"></a>

```go
func RowsInput() *f64
```

- *Type:* *f64

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.rows"></a>

```go
func Rows() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeOpenflowDeploymentsLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a>

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowdeployments"

datasnowflakeopenflowdeployments.NewDataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.get"></a>

```go
func Get(index *f64) DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowdeployments"

datasnowflakeopenflowdeployments.NewDataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.customIngressHostname">CustomIngressHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.usePrivateLink">UsePrivateLink</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.useUserAuthOverPrivateLink">UseUserAuthOverPrivateLink</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.vpcType">VpcType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CustomIngressHostname`<sup>Required</sup> <a name="CustomIngressHostname" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.customIngressHostname"></a>

```go
func CustomIngressHostname() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UsePrivateLink`<sup>Required</sup> <a name="UsePrivateLink" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.usePrivateLink"></a>

```go
func UsePrivateLink() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UseUserAuthOverPrivateLink`<sup>Required</sup> <a name="UseUserAuthOverPrivateLink" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```go
func UseUserAuthOverPrivateLink() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `VpcType`<sup>Required</sup> <a name="VpcType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.vpcType"></a>

```go
func VpcType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput</a>

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowdeployments"

datasnowflakeopenflowdeployments.NewDataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.get"></a>

```go
func Get(index *f64) DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowdeployments"

datasnowflakeopenflowdeployments.NewDataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeployments">DataSnowflakeOpenflowDeploymentsOpenflowDeployments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.describeOutput"></a>

```go
func DescribeOutput() DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList</a>

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.parameters"></a>

```go
func Parameters() DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.showOutput"></a>

```go
func ShowOutput() DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeOpenflowDeploymentsOpenflowDeployments
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeployments">DataSnowflakeOpenflowDeploymentsOpenflowDeployments</a>

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowdeployments"

datasnowflakeopenflowdeployments.NewDataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.get"></a>

```go
func Get(index *f64) DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowdeployments"

datasnowflakeopenflowdeployments.NewDataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable</a>

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowdeployments"

datasnowflakeopenflowdeployments.NewDataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.get"></a>

```go
func Get(index *f64) DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowdeployments"

datasnowflakeopenflowdeployments.NewDataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.eventTable">EventTable</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventTable`<sup>Required</sup> <a name="EventTable" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.eventTable"></a>

```go
func EventTable() DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters</a>

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowdeployments"

datasnowflakeopenflowdeployments.NewDataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.get"></a>

```go
func Get(index *f64) DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowdeployments"

datasnowflakeopenflowdeployments.NewDataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.customIngressHostname">CustomIngressHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.updatedOn">UpdatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.usePrivateLink">UsePrivateLink</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.useUserAuthOverPrivateLink">UseUserAuthOverPrivateLink</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.vpcType">VpcType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `CustomIngressHostname`<sup>Required</sup> <a name="CustomIngressHostname" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.customIngressHostname"></a>

```go
func CustomIngressHostname() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdatedOn`<sup>Required</sup> <a name="UpdatedOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.updatedOn"></a>

```go
func UpdatedOn() *string
```

- *Type:* *string

---

##### `UsePrivateLink`<sup>Required</sup> <a name="UsePrivateLink" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.usePrivateLink"></a>

```go
func UsePrivateLink() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UseUserAuthOverPrivateLink`<sup>Required</sup> <a name="UseUserAuthOverPrivateLink" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```go
func UseUserAuthOverPrivateLink() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `VpcType`<sup>Required</sup> <a name="VpcType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.vpcType"></a>

```go
func VpcType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput</a>

---



