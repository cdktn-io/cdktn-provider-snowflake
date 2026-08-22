# `dataSnowflakeExternalAccessIntegrations` Submodule <a name="`dataSnowflakeExternalAccessIntegrations` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeExternalAccessIntegrations <a name="DataSnowflakeExternalAccessIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations snowflake_external_access_integrations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeExternalAccessIntegrations(Construct Scope, string Id, DataSnowflakeExternalAccessIntegrationsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig">DataSnowflakeExternalAccessIntegrationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig">DataSnowflakeExternalAccessIntegrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetLike">ResetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetWithDescribe">ResetWithDescribe</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLike` <a name="ResetLike" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetLike"></a>

```csharp
private void ResetLike()
```

##### `ResetWithDescribe` <a name="ResetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetWithDescribe"></a>

```csharp
private void ResetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeExternalAccessIntegrations resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeExternalAccessIntegrations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeExternalAccessIntegrations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeExternalAccessIntegrations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeExternalAccessIntegrations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataSnowflakeExternalAccessIntegrations resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeExternalAccessIntegrations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeExternalAccessIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeExternalAccessIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.externalAccessIntegrations">ExternalAccessIntegrations</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.likeInput">LikeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.withDescribeInput">WithDescribeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.like">Like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.withDescribe">WithDescribe</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ExternalAccessIntegrations`<sup>Required</sup> <a name="ExternalAccessIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.externalAccessIntegrations"></a>

```csharp
public DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList ExternalAccessIntegrations { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.likeInput"></a>

```csharp
public string LikeInput { get; }
```

- *Type:* string

---

##### `WithDescribeInput`<sup>Optional</sup> <a name="WithDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.withDescribeInput"></a>

```csharp
public bool|IResolvable WithDescribeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.like"></a>

```csharp
public string Like { get; }
```

- *Type:* string

---

##### `WithDescribe`<sup>Required</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.withDescribe"></a>

```csharp
public bool|IResolvable WithDescribe { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeExternalAccessIntegrationsConfig <a name="DataSnowflakeExternalAccessIntegrationsConfig" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeExternalAccessIntegrationsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    string Like = null,
    bool|IResolvable WithDescribe = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#id DataSnowflakeExternalAccessIntegrations#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.like">Like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.withDescribe">WithDescribe</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Default: `true`) Runs DESC EXTERNAL ACCESS INTEGRATION for each integration returned by SHOW EXTERNAL ACCESS INTEGRATIONS. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#id DataSnowflakeExternalAccessIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.like"></a>

```csharp
public string Like { get; set; }
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#like DataSnowflakeExternalAccessIntegrations#like}

---

##### `WithDescribe`<sup>Optional</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.withDescribe"></a>

```csharp
public bool|IResolvable WithDescribe { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Default: `true`) Runs DESC EXTERNAL ACCESS INTEGRATION for each integration returned by SHOW EXTERNAL ACCESS INTEGRATIONS.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#with_describe DataSnowflakeExternalAccessIntegrations#with_describe}

---

### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations {

};
```


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput {

};
```


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.get"></a>

```csharp
private DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedApiAuthenticationIntegrations">AllowedApiAuthenticationIntegrations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedAuthenticationSecrets">AllowedAuthenticationSecrets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedNetworkRules">AllowedNetworkRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedApiAuthenticationIntegrations`<sup>Required</sup> <a name="AllowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedApiAuthenticationIntegrations"></a>

```csharp
public string[] AllowedApiAuthenticationIntegrations { get; }
```

- *Type:* string[]

---

##### `AllowedAuthenticationSecrets`<sup>Required</sup> <a name="AllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedAuthenticationSecrets"></a>

```csharp
public string[] AllowedAuthenticationSecrets { get; }
```

- *Type:* string[]

---

##### `AllowedNetworkRules`<sup>Required</sup> <a name="AllowedNetworkRules" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedNetworkRules"></a>

```csharp
public string[] AllowedNetworkRules { get; }
```

- *Type:* string[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput</a>

---


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.get"></a>

```csharp
private DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.describeOutput"></a>

```csharp
public DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.showOutput"></a>

```csharp
public DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations</a>

---


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.get"></a>

```csharp
private DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput</a>

---



