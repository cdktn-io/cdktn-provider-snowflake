# `dataSnowflakeApiIntegrations` Submodule <a name="`dataSnowflakeApiIntegrations` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeApiIntegrations <a name="DataSnowflakeApiIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/api_integrations snowflake_api_integrations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeapiintegrations"

datasnowflakeapiintegrations.NewDataSnowflakeApiIntegrations(scope Construct, id *string, config DataSnowflakeApiIntegrationsConfig) DataSnowflakeApiIntegrations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig">DataSnowflakeApiIntegrationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig">DataSnowflakeApiIntegrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetLike">ResetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetWithDescribe">ResetWithDescribe</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetId"></a>

```go
func ResetId()
```

##### `ResetLike` <a name="ResetLike" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetLike"></a>

```go
func ResetLike()
```

##### `ResetWithDescribe` <a name="ResetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetWithDescribe"></a>

```go
func ResetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeApiIntegrations resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeapiintegrations"

datasnowflakeapiintegrations.DataSnowflakeApiIntegrations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeapiintegrations"

datasnowflakeapiintegrations.DataSnowflakeApiIntegrations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeapiintegrations"

datasnowflakeapiintegrations.DataSnowflakeApiIntegrations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeapiintegrations"

datasnowflakeapiintegrations.DataSnowflakeApiIntegrations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataSnowflakeApiIntegrations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSnowflakeApiIntegrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSnowflakeApiIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/api_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeApiIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.apiIntegrations">ApiIntegrations</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList">DataSnowflakeApiIntegrationsApiIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.likeInput">LikeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.withDescribeInput">WithDescribeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.like">Like</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.withDescribe">WithDescribe</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ApiIntegrations`<sup>Required</sup> <a name="ApiIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.apiIntegrations"></a>

```go
func ApiIntegrations() DataSnowflakeApiIntegrationsApiIntegrationsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList">DataSnowflakeApiIntegrationsApiIntegrationsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.likeInput"></a>

```go
func LikeInput() *string
```

- *Type:* *string

---

##### `WithDescribeInput`<sup>Optional</sup> <a name="WithDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.withDescribeInput"></a>

```go
func WithDescribeInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.like"></a>

```go
func Like() *string
```

- *Type:* *string

---

##### `WithDescribe`<sup>Required</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.withDescribe"></a>

```go
func WithDescribe() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeApiIntegrationsApiIntegrations <a name="DataSnowflakeApiIntegrationsApiIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeapiintegrations"

&datasnowflakeapiintegrations.DataSnowflakeApiIntegrationsApiIntegrations {

}
```


### DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput <a name="DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeapiintegrations"

&datasnowflakeapiintegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput {

}
```


### DataSnowflakeApiIntegrationsApiIntegrationsShowOutput <a name="DataSnowflakeApiIntegrationsApiIntegrationsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeapiintegrations"

&datasnowflakeapiintegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutput {

}
```


### DataSnowflakeApiIntegrationsConfig <a name="DataSnowflakeApiIntegrationsConfig" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeapiintegrations"

&datasnowflakeapiintegrations.DataSnowflakeApiIntegrationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Like: *string,
	WithDescribe: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/api_integrations#id DataSnowflakeApiIntegrations#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.like">Like</a></code> | <code>*string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.withDescribe">WithDescribe</a></code> | <code>interface{}</code> | (Default: `true`) Runs DESC API INTEGRATION for each integration returned by SHOW API INTEGRATIONS. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/api_integrations#id DataSnowflakeApiIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.like"></a>

```go
Like *string
```

- *Type:* *string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/api_integrations#like DataSnowflakeApiIntegrations#like}

---

##### `WithDescribe`<sup>Optional</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.withDescribe"></a>

```go
WithDescribe interface{}
```

- *Type:* interface{}

(Default: `true`) Runs DESC API INTEGRATION for each integration returned by SHOW API INTEGRATIONS.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/api_integrations#with_describe DataSnowflakeApiIntegrations#with_describe}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList <a name="DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeapiintegrations"

datasnowflakeapiintegrations.NewDataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.get"></a>

```go
func Get(index *f64) DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference <a name="DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeapiintegrations"

datasnowflakeapiintegrations.NewDataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.allowedAuthenticationSecrets">AllowedAuthenticationSecrets</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.allowedPrefixes">AllowedPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiAwsExternalId">ApiAwsExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiAwsIamUserArn">ApiAwsIamUserArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiAwsRoleArn">ApiAwsRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiProvider">ApiProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureAdApplicationId">AzureAdApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureConsentUrl">AzureConsentUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureMultiTenantAppName">AzureMultiTenantAppName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureTenantId">AzureTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.blockedPrefixes">BlockedPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.googleApiServiceAccount">GoogleApiServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.googleAudience">GoogleAudience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAccessTokenValidity">OauthAccessTokenValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAllowedScopes">OauthAllowedScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAssertionIssuer">OauthAssertionIssuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAuthorizationEndpoint">OauthAuthorizationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthClientAuthMethod">OauthClientAuthMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthClientId">OauthClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthGrant">OauthGrant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthRefreshTokenValidity">OauthRefreshTokenValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthResourceUrl">OauthResourceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthTokenEndpoint">OauthTokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthUsername">OauthUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.tlsTrustedCertificates">TlsTrustedCertificates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.usePrivatelinkEndpoint">UsePrivatelinkEndpoint</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.userAuthType">UserAuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput">DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedAuthenticationSecrets`<sup>Required</sup> <a name="AllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.allowedAuthenticationSecrets"></a>

```go
func AllowedAuthenticationSecrets() *string
```

- *Type:* *string

---

##### `AllowedPrefixes`<sup>Required</sup> <a name="AllowedPrefixes" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.allowedPrefixes"></a>

```go
func AllowedPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `ApiAwsExternalId`<sup>Required</sup> <a name="ApiAwsExternalId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiAwsExternalId"></a>

```go
func ApiAwsExternalId() *string
```

- *Type:* *string

---

##### `ApiAwsIamUserArn`<sup>Required</sup> <a name="ApiAwsIamUserArn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiAwsIamUserArn"></a>

```go
func ApiAwsIamUserArn() *string
```

- *Type:* *string

---

##### `ApiAwsRoleArn`<sup>Required</sup> <a name="ApiAwsRoleArn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiAwsRoleArn"></a>

```go
func ApiAwsRoleArn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `ApiProvider`<sup>Required</sup> <a name="ApiProvider" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiProvider"></a>

```go
func ApiProvider() *string
```

- *Type:* *string

---

##### `AzureAdApplicationId`<sup>Required</sup> <a name="AzureAdApplicationId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureAdApplicationId"></a>

```go
func AzureAdApplicationId() *string
```

- *Type:* *string

---

##### `AzureConsentUrl`<sup>Required</sup> <a name="AzureConsentUrl" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureConsentUrl"></a>

```go
func AzureConsentUrl() *string
```

- *Type:* *string

---

##### `AzureMultiTenantAppName`<sup>Required</sup> <a name="AzureMultiTenantAppName" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureMultiTenantAppName"></a>

```go
func AzureMultiTenantAppName() *string
```

- *Type:* *string

---

##### `AzureTenantId`<sup>Required</sup> <a name="AzureTenantId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureTenantId"></a>

```go
func AzureTenantId() *string
```

- *Type:* *string

---

##### `BlockedPrefixes`<sup>Required</sup> <a name="BlockedPrefixes" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.blockedPrefixes"></a>

```go
func BlockedPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `GoogleApiServiceAccount`<sup>Required</sup> <a name="GoogleApiServiceAccount" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.googleApiServiceAccount"></a>

```go
func GoogleApiServiceAccount() *string
```

- *Type:* *string

---

##### `GoogleAudience`<sup>Required</sup> <a name="GoogleAudience" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.googleAudience"></a>

```go
func GoogleAudience() *string
```

- *Type:* *string

---

##### `OauthAccessTokenValidity`<sup>Required</sup> <a name="OauthAccessTokenValidity" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAccessTokenValidity"></a>

```go
func OauthAccessTokenValidity() *f64
```

- *Type:* *f64

---

##### `OauthAllowedScopes`<sup>Required</sup> <a name="OauthAllowedScopes" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAllowedScopes"></a>

```go
func OauthAllowedScopes() *[]*string
```

- *Type:* *[]*string

---

##### `OauthAssertionIssuer`<sup>Required</sup> <a name="OauthAssertionIssuer" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAssertionIssuer"></a>

```go
func OauthAssertionIssuer() *string
```

- *Type:* *string

---

##### `OauthAuthorizationEndpoint`<sup>Required</sup> <a name="OauthAuthorizationEndpoint" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAuthorizationEndpoint"></a>

```go
func OauthAuthorizationEndpoint() *string
```

- *Type:* *string

---

##### `OauthClientAuthMethod`<sup>Required</sup> <a name="OauthClientAuthMethod" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthClientAuthMethod"></a>

```go
func OauthClientAuthMethod() *string
```

- *Type:* *string

---

##### `OauthClientId`<sup>Required</sup> <a name="OauthClientId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthClientId"></a>

```go
func OauthClientId() *string
```

- *Type:* *string

---

##### `OauthGrant`<sup>Required</sup> <a name="OauthGrant" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthGrant"></a>

```go
func OauthGrant() *string
```

- *Type:* *string

---

##### `OauthRefreshTokenValidity`<sup>Required</sup> <a name="OauthRefreshTokenValidity" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthRefreshTokenValidity"></a>

```go
func OauthRefreshTokenValidity() *f64
```

- *Type:* *f64

---

##### `OauthResourceUrl`<sup>Required</sup> <a name="OauthResourceUrl" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthResourceUrl"></a>

```go
func OauthResourceUrl() *string
```

- *Type:* *string

---

##### `OauthTokenEndpoint`<sup>Required</sup> <a name="OauthTokenEndpoint" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthTokenEndpoint"></a>

```go
func OauthTokenEndpoint() *string
```

- *Type:* *string

---

##### `OauthUsername`<sup>Required</sup> <a name="OauthUsername" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthUsername"></a>

```go
func OauthUsername() *string
```

- *Type:* *string

---

##### `TlsTrustedCertificates`<sup>Required</sup> <a name="TlsTrustedCertificates" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.tlsTrustedCertificates"></a>

```go
func TlsTrustedCertificates() *[]*string
```

- *Type:* *[]*string

---

##### `UsePrivatelinkEndpoint`<sup>Required</sup> <a name="UsePrivatelinkEndpoint" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.usePrivatelinkEndpoint"></a>

```go
func UsePrivatelinkEndpoint() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UserAuthType`<sup>Required</sup> <a name="UserAuthType" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.userAuthType"></a>

```go
func UserAuthType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput">DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput</a>

---


### DataSnowflakeApiIntegrationsApiIntegrationsList <a name="DataSnowflakeApiIntegrationsApiIntegrationsList" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeapiintegrations"

datasnowflakeapiintegrations.NewDataSnowflakeApiIntegrationsApiIntegrationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeApiIntegrationsApiIntegrationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.get"></a>

```go
func Get(index *f64) DataSnowflakeApiIntegrationsApiIntegrationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeApiIntegrationsApiIntegrationsOutputReference <a name="DataSnowflakeApiIntegrationsApiIntegrationsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeapiintegrations"

datasnowflakeapiintegrations.NewDataSnowflakeApiIntegrationsApiIntegrationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeApiIntegrationsApiIntegrationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList">DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList">DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrations">DataSnowflakeApiIntegrationsApiIntegrations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.describeOutput"></a>

```go
func DescribeOutput() DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList">DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.showOutput"></a>

```go
func ShowOutput() DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList">DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeApiIntegrationsApiIntegrations
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrations">DataSnowflakeApiIntegrationsApiIntegrations</a>

---


### DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList <a name="DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeapiintegrations"

datasnowflakeapiintegrations.NewDataSnowflakeApiIntegrationsApiIntegrationsShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.get"></a>

```go
func Get(index *f64) DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference <a name="DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeapiintegrations"

datasnowflakeapiintegrations.NewDataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.apiType">ApiType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutput">DataSnowflakeApiIntegrationsApiIntegrationsShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiType`<sup>Required</sup> <a name="ApiType" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.apiType"></a>

```go
func ApiType() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeApiIntegrationsApiIntegrationsShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutput">DataSnowflakeApiIntegrationsApiIntegrationsShowOutput</a>

---



