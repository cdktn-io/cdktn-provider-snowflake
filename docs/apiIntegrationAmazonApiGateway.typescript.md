# `apiIntegrationAmazonApiGateway` Submodule <a name="`apiIntegrationAmazonApiGateway` Submodule" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationAmazonApiGateway <a name="ApiIntegrationAmazonApiGateway" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_amazon_api_gateway snowflake_api_integration_amazon_api_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer"></a>

```typescript
import { apiIntegrationAmazonApiGateway } from '@cdktn/provider-snowflake'

new apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway(scope: Construct, id: string, config: ApiIntegrationAmazonApiGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig">ApiIntegrationAmazonApiGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig">ApiIntegrationAmazonApiGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetApiBlockedPrefixes">resetApiBlockedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.putTimeouts"></a>

```typescript
public putTimeouts(value: ApiIntegrationAmazonApiGatewayTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts">ApiIntegrationAmazonApiGatewayTimeouts</a>

---

##### `resetApiBlockedPrefixes` <a name="resetApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetApiBlockedPrefixes"></a>

```typescript
public resetApiBlockedPrefixes(): void
```

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetApiKey"></a>

```typescript
public resetApiKey(): void
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApiIntegrationAmazonApiGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isConstruct"></a>

```typescript
import { apiIntegrationAmazonApiGateway } from '@cdktn/provider-snowflake'

apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isTerraformElement"></a>

```typescript
import { apiIntegrationAmazonApiGateway } from '@cdktn/provider-snowflake'

apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isTerraformResource"></a>

```typescript
import { apiIntegrationAmazonApiGateway } from '@cdktn/provider-snowflake'

apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.generateConfigForImport"></a>

```typescript
import { apiIntegrationAmazonApiGateway } from '@cdktn/provider-snowflake'

apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApiIntegrationAmazonApiGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiIntegrationAmazonApiGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiIntegrationAmazonApiGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_amazon_api_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationAmazonApiGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList">ApiIntegrationAmazonApiGatewayDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList">ApiIntegrationAmazonApiGatewayShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference">ApiIntegrationAmazonApiGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiAllowedPrefixesInput">apiAllowedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiAwsRoleArnInput">apiAwsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiBlockedPrefixesInput">apiBlockedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiKeyInput">apiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiProviderInput">apiProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts">ApiIntegrationAmazonApiGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiAwsRoleArn">apiAwsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiProvider">apiProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.describeOutput"></a>

```typescript
public readonly describeOutput: ApiIntegrationAmazonApiGatewayDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList">ApiIntegrationAmazonApiGatewayDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.showOutput"></a>

```typescript
public readonly showOutput: ApiIntegrationAmazonApiGatewayShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList">ApiIntegrationAmazonApiGatewayShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.timeouts"></a>

```typescript
public readonly timeouts: ApiIntegrationAmazonApiGatewayTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference">ApiIntegrationAmazonApiGatewayTimeoutsOutputReference</a>

---

##### `apiAllowedPrefixesInput`<sup>Optional</sup> <a name="apiAllowedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiAllowedPrefixesInput"></a>

```typescript
public readonly apiAllowedPrefixesInput: string[];
```

- *Type:* string[]

---

##### `apiAwsRoleArnInput`<sup>Optional</sup> <a name="apiAwsRoleArnInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiAwsRoleArnInput"></a>

```typescript
public readonly apiAwsRoleArnInput: string;
```

- *Type:* string

---

##### `apiBlockedPrefixesInput`<sup>Optional</sup> <a name="apiBlockedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiBlockedPrefixesInput"></a>

```typescript
public readonly apiBlockedPrefixesInput: string[];
```

- *Type:* string[]

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* string

---

##### `apiProviderInput`<sup>Optional</sup> <a name="apiProviderInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiProviderInput"></a>

```typescript
public readonly apiProviderInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApiIntegrationAmazonApiGatewayTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts">ApiIntegrationAmazonApiGatewayTimeouts</a>

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiAllowedPrefixes"></a>

```typescript
public readonly apiAllowedPrefixes: string[];
```

- *Type:* string[]

---

##### `apiAwsRoleArn`<sup>Required</sup> <a name="apiAwsRoleArn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiAwsRoleArn"></a>

```typescript
public readonly apiAwsRoleArn: string;
```

- *Type:* string

---

##### `apiBlockedPrefixes`<sup>Required</sup> <a name="apiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiBlockedPrefixes"></a>

```typescript
public readonly apiBlockedPrefixes: string[];
```

- *Type:* string[]

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `apiProvider`<sup>Required</sup> <a name="apiProvider" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiProvider"></a>

```typescript
public readonly apiProvider: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationAmazonApiGatewayConfig <a name="ApiIntegrationAmazonApiGatewayConfig" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.Initializer"></a>

```typescript
import { apiIntegrationAmazonApiGateway } from '@cdktn/provider-snowflake'

const apiIntegrationAmazonApiGatewayConfig: apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>string[]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiAwsRoleArn">apiAwsRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role that grants Snowflake permission to call the API endpoint. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiProvider">apiProvider</a></code> | <code>string</code> | Specifies the type of AWS gateway. Valid values are (case-insensitive): `aws_api_gateway` \| `aws_private_api_gateway` \| `aws_gov_api_gateway` \| `aws_gov_private_api_gateway`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>string[]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiKey">apiKey</a></code> | <code>string</code> | Specifies the API key (secret) that Snowflake uses to authenticate when making calls to the proxy service. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_amazon_api_gateway#id ApiIntegrationAmazonApiGateway#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts">ApiIntegrationAmazonApiGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiAllowedPrefixes"></a>

```typescript
public readonly apiAllowedPrefixes: string[];
```

- *Type:* string[]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_amazon_api_gateway#api_allowed_prefixes ApiIntegrationAmazonApiGateway#api_allowed_prefixes}

---

##### `apiAwsRoleArn`<sup>Required</sup> <a name="apiAwsRoleArn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiAwsRoleArn"></a>

```typescript
public readonly apiAwsRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role that grants Snowflake permission to call the API endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_amazon_api_gateway#api_aws_role_arn ApiIntegrationAmazonApiGateway#api_aws_role_arn}

---

##### `apiProvider`<sup>Required</sup> <a name="apiProvider" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiProvider"></a>

```typescript
public readonly apiProvider: string;
```

- *Type:* string

Specifies the type of AWS gateway. Valid values are (case-insensitive): `aws_api_gateway` | `aws_private_api_gateway` | `aws_gov_api_gateway` | `aws_gov_private_api_gateway`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_amazon_api_gateway#api_provider ApiIntegrationAmazonApiGateway#api_provider}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_amazon_api_gateway#enabled ApiIntegrationAmazonApiGateway#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_amazon_api_gateway#name ApiIntegrationAmazonApiGateway#name}

---

##### `apiBlockedPrefixes`<sup>Optional</sup> <a name="apiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiBlockedPrefixes"></a>

```typescript
public readonly apiBlockedPrefixes: string[];
```

- *Type:* string[]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_amazon_api_gateway#api_blocked_prefixes ApiIntegrationAmazonApiGateway#api_blocked_prefixes}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

Specifies the API key (secret) that Snowflake uses to authenticate when making calls to the proxy service.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_amazon_api_gateway#api_key ApiIntegrationAmazonApiGateway#api_key}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_amazon_api_gateway#comment ApiIntegrationAmazonApiGateway#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_amazon_api_gateway#id ApiIntegrationAmazonApiGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApiIntegrationAmazonApiGatewayTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts">ApiIntegrationAmazonApiGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_amazon_api_gateway#timeouts ApiIntegrationAmazonApiGateway#timeouts}

---

### ApiIntegrationAmazonApiGatewayDescribeOutput <a name="ApiIntegrationAmazonApiGatewayDescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutput.Initializer"></a>

```typescript
import { apiIntegrationAmazonApiGateway } from '@cdktn/provider-snowflake'

const apiIntegrationAmazonApiGatewayDescribeOutput: apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutput = { ... }
```


### ApiIntegrationAmazonApiGatewayShowOutput <a name="ApiIntegrationAmazonApiGatewayShowOutput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutput.Initializer"></a>

```typescript
import { apiIntegrationAmazonApiGateway } from '@cdktn/provider-snowflake'

const apiIntegrationAmazonApiGatewayShowOutput: apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutput = { ... }
```


### ApiIntegrationAmazonApiGatewayTimeouts <a name="ApiIntegrationAmazonApiGatewayTimeouts" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.Initializer"></a>

```typescript
import { apiIntegrationAmazonApiGateway } from '@cdktn/provider-snowflake'

const apiIntegrationAmazonApiGatewayTimeouts: apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_amazon_api_gateway#create ApiIntegrationAmazonApiGateway#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_amazon_api_gateway#delete ApiIntegrationAmazonApiGateway#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_amazon_api_gateway#read ApiIntegrationAmazonApiGateway#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_amazon_api_gateway#update ApiIntegrationAmazonApiGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_amazon_api_gateway#create ApiIntegrationAmazonApiGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_amazon_api_gateway#delete ApiIntegrationAmazonApiGateway#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_amazon_api_gateway#read ApiIntegrationAmazonApiGateway#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_amazon_api_gateway#update ApiIntegrationAmazonApiGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationAmazonApiGatewayDescribeOutputList <a name="ApiIntegrationAmazonApiGatewayDescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.Initializer"></a>

```typescript
import { apiIntegrationAmazonApiGateway } from '@cdktn/provider-snowflake'

new apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.get"></a>

```typescript
public get(index: number): ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference <a name="ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer"></a>

```typescript
import { apiIntegrationAmazonApiGateway } from '@cdktn/provider-snowflake'

new apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.allowedPrefixes">allowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiAwsExternalId">apiAwsExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiAwsIamUserArn">apiAwsIamUserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiAwsRoleArn">apiAwsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiProvider">apiProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.blockedPrefixes">blockedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutput">ApiIntegrationAmazonApiGatewayDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedPrefixes`<sup>Required</sup> <a name="allowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.allowedPrefixes"></a>

```typescript
public readonly allowedPrefixes: string[];
```

- *Type:* string[]

---

##### `apiAwsExternalId`<sup>Required</sup> <a name="apiAwsExternalId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiAwsExternalId"></a>

```typescript
public readonly apiAwsExternalId: string;
```

- *Type:* string

---

##### `apiAwsIamUserArn`<sup>Required</sup> <a name="apiAwsIamUserArn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiAwsIamUserArn"></a>

```typescript
public readonly apiAwsIamUserArn: string;
```

- *Type:* string

---

##### `apiAwsRoleArn`<sup>Required</sup> <a name="apiAwsRoleArn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiAwsRoleArn"></a>

```typescript
public readonly apiAwsRoleArn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `apiProvider`<sup>Required</sup> <a name="apiProvider" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiProvider"></a>

```typescript
public readonly apiProvider: string;
```

- *Type:* string

---

##### `blockedPrefixes`<sup>Required</sup> <a name="blockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.blockedPrefixes"></a>

```typescript
public readonly blockedPrefixes: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiIntegrationAmazonApiGatewayDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutput">ApiIntegrationAmazonApiGatewayDescribeOutput</a>

---


### ApiIntegrationAmazonApiGatewayShowOutputList <a name="ApiIntegrationAmazonApiGatewayShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.Initializer"></a>

```typescript
import { apiIntegrationAmazonApiGateway } from '@cdktn/provider-snowflake'

new apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.get"></a>

```typescript
public get(index: number): ApiIntegrationAmazonApiGatewayShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiIntegrationAmazonApiGatewayShowOutputOutputReference <a name="ApiIntegrationAmazonApiGatewayShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer"></a>

```typescript
import { apiIntegrationAmazonApiGateway } from '@cdktn/provider-snowflake'

new apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.apiType">apiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutput">ApiIntegrationAmazonApiGatewayShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiType`<sup>Required</sup> <a name="apiType" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.apiType"></a>

```typescript
public readonly apiType: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiIntegrationAmazonApiGatewayShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutput">ApiIntegrationAmazonApiGatewayShowOutput</a>

---


### ApiIntegrationAmazonApiGatewayTimeoutsOutputReference <a name="ApiIntegrationAmazonApiGatewayTimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.Initializer"></a>

```typescript
import { apiIntegrationAmazonApiGateway } from '@cdktn/provider-snowflake'

new apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts">ApiIntegrationAmazonApiGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiIntegrationAmazonApiGatewayTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts">ApiIntegrationAmazonApiGatewayTimeouts</a>

---



